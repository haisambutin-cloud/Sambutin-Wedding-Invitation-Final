import { supabase } from "@/integrations/supabase/client";

import type { SiteContent } from "./content-types";
import { DEFAULT_CONTENT } from "./content-defaults";

const ROW_ID = "main";

/**
 * Mengambil content langsung dari Supabase.
 * Hanya digunakan oleh Admin Panel.
 */
export async function loadAdminContent(): Promise<SiteContent> {
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("id", ROW_ID)
    .single();

  if (error) {
    console.error(
      "[content-admin] Failed to load content:",
      error,
    );

    throw error;
  }

  if (!data?.data) {
    console.warn(
      "[content-admin] Content tidak ditemukan. Menggunakan DEFAULT_CONTENT.",
    );

    return DEFAULT_CONTENT;
  }

  return data.data as SiteContent;
}

/**
 * Menyimpan perubahan dari Admin ke Supabase.
 */
export async function saveContent(
  next: SiteContent,
): Promise<void> {
  const { error } = await supabase
    .from("site_content")
    .upsert(
      {
        id: ROW_ID,
        data: next,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "id",
      },
    );

  if (error) {
    console.error(
      "[content-admin] Failed to save content:",
      error,
    );

    throw error;
  }
}

/**
 * Mengembalikan content di Supabase
 * ke DEFAULT_CONTENT.
 */
export async function resetContent(): Promise<void> {
  const { error } = await supabase
    .from("site_content")
    .upsert(
      {
        id: ROW_ID,
        data: DEFAULT_CONTENT,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "id",
      },
    );

  if (error) {
    console.error(
      "[content-admin] Failed to reset content:",
      error,
    );

    throw error;
  }
}