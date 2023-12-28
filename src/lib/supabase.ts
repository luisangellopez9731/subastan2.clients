import { createClient } from "@supabase/supabase-js";
import { ENV_VARIABLES } from "src/utils/envVariables";

export const supabase = createClient(
  ENV_VARIABLES.supabaseClientUrl,
  ENV_VARIABLES.supabaseClientKey
);
