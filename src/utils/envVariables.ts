const supabaseClientUrl = import.meta.env.SUPABASE_PROJECT_URL;
const supabaseClientKey = import.meta.env.SUPABASE_PROJECT_KEY;

if (!supabaseClientUrl || !supabaseClientKey) {
  throw new Error(
    `No configuration for supabase provided, please provide necessary data by environment variable; data provided: SUPABASE_PROJECT_URL = "${supabaseClientUrl}", SUPABASE_PROJECT_KEY = "${supabaseClientKey}"`
  );
}

export const ENV_VARIABLES = {
  supabaseClientUrl: supabaseClientUrl as string,
  supabaseClientKey: supabaseClientKey as string,
};
