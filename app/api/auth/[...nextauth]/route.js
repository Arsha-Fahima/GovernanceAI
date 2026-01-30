import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabaseServer } from "@/lib/supabase-server";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("🔐 SignIn callback triggered");
      console.log("Provider:", account?.provider);
      console.log("User email:", user?.email);
      console.log("User name:", user?.name);
      
      if (account.provider === "google") {
        const { email, name } = user;

        try {
          console.log("📧 Attempting to check if user exists:", email);
          
          // Check if user already exists in Supabase users table
          const { data: existingUser, error: fetchError } = await supabaseServer
            .from("users")
            .select("id, email")
            .eq("email", email)
            .maybeSingle();

          if (fetchError) {
            console.error("❌ Error fetching user from Supabase:", fetchError);
          } else {
            console.log("✅ User fetch successful. Existing user:", existingUser);
          }

          // Only insert email and name if user doesn't exist - other details will be filled via form
          if (!existingUser) {
            console.log("➕ User doesn't exist. Creating new user with email and name...");
            
            // Use email as temporary unique gstin to avoid unique constraint issues
            const tempGstin = `TEMP_${email.replace('@', '_').replace('.', '_')}`;
            
            const { data: insertData, error: insertError } = await supabaseServer.from("users").insert({
              email: email,
              name: name || "",
              phone: "",
              gstin: tempGstin,
              is_active: true,
              role: "user",
            }).select();

            if (insertError) {
              console.error("❌ Error storing user in Supabase:", insertError);
            } else {
              console.log("✅ User created successfully:", insertData);
            }
          } else {
            console.log("ℹ️ User already exists. Skipping insert.");
          }
        } catch (err) {
          console.error("❌ Sign in callback error:", err);
        }
      }
      return true;
    },
    async session({ session, token }) {
      // Add user info to session from database if needed
      if (session?.user?.email) {
        const { data: dbUser } = await supabaseServer
          .from("users")
          .select("id, role, gstin, name, phone")
          .eq("email", session.user.email)
          .maybeSingle();

        if (dbUser) {
          session.user.id = dbUser.id;
          session.user.role = dbUser.role || "user";
          session.user.gstin = dbUser.gstin || "";
          session.user.hasCompletedProfile = !!(dbUser.name && dbUser.phone && dbUser.gstin);
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
