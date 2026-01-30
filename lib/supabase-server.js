import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_KEY;

console.log("🔑 Supabase Server Config:");
console.log("  - URL:", supabaseUrl ? "✓ Set" : "✗ Missing");
console.log("  - Using Service Role Key:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "✓ Yes" : "✗ No (using public key)");
console.log("  - Key length:", supabaseKey?.length || 0);

if (!supabaseUrl) {
	throw new Error(
		"Missing environment variable SUPABASE_URL. Please set it in .env.local or your deployment environment."
	);
}

if (!supabaseKey) {
	throw new Error(
		"Missing environment variable SUPABASE_KEY. Please set it in .env.local or your deployment environment."
	);
}

export const supabaseServer = createClient(supabaseUrl, supabaseKey);
