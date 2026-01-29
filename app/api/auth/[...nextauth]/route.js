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
      if (account.provider === "google") {
        const { email, name } = user;

        // Check if user already exists
        const { data: existingUser } = await supabaseServer
          .from("users")
          .select("id, email")
          .eq("email", email)
          .maybeSingle();

        // Only insert if user doesn't exist
        if (!existingUser) {
          const { error } = await supabaseServer.from("users").insert({
            email,
            name,
            phone: "",
            gstin: "",
            is_active: true,
            role: "user",
          });

          if (error) {
            console.error("Error storing user in Supabase:", error);
          }
        }
      }
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
