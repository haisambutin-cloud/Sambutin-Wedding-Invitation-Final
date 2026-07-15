import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Change the current signed-in user's password.
 */
export const changeAdminPassword = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { currentPassword: string; newPassword: string }) => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid input");
    }

    const currentPassword = String(data.currentPassword ?? "");
    const newPassword = String(data.newPassword ?? "");

    if (!currentPassword) {
      throw new Error("Password saat ini wajib diisi");
    }

    if (newPassword.length < 8) {
      throw new Error("Password baru minimal 8 karakter");
    }

    if (newPassword.length > 72) {
      throw new Error("Password baru maksimal 72 karakter");
    }

    return {
      currentPassword,
      newPassword,
    };
  })
  .handler(async ({ data, context }) => {
    const email = context.claims?.email as string | undefined;

    if (!email) {
      throw new Error("Sesi tidak valid");
    }

    // Verify current password
    const { createClient } = await import("@supabase/supabase-js");

    const verifier = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          storage: undefined,
        },
      }
    );

    const { error: signInError } = await verifier.auth.signInWithPassword({
      email,
      password: data.currentPassword,
    });

    if (signInError) {
      throw new Error("Password saat ini salah");
    }

    // Update password using Admin API
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const { error } = await supabaseAdmin.auth.admin.updateUserById(
      context.userId,
      {
        password: data.newPassword,
      }
    );

    if (error) {
      throw new Error(error.message);
    }

    return {
      ok: true,
    };
  });