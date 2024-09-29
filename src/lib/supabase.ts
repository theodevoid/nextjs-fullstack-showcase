import { createBrowserClient } from "@supabase/ssr";
import { env } from "~/env";

// Create a single supabase client for interacting with your database
export const supabase = createBrowserClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_KEY,
);
