import { supabase } from "src/lib/supabase";

export type NewPassword = string;

export class UserServices {
  static async changeUserPassword(newPassword: NewPassword) {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    return data;
  }
}
