import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

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
