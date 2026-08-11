import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import type { SiteContent, TitleParts } from "./content-types";
import { DEFAULT_CONTENT } from "./content-defaults";

export { DEFAULT_CONTENT } from "./content-defaults";

// ============================================================
// Configuration
// ============================================================

const EVENT = "sambutin:content:change";

// ============================================================
// Published Content
// ============================================================
//
// PUBLIC WEBSITE
//
// Public TIDAK mengambil content langsung dari Supabase.
//
// Alur:
//
// Supabase
//    ↓
// generate-content.js
//    ↓
// public/content/site-content.json
//    ↓
// Vercel
//    ↓
// Public
//
// ============================================================

let cached: SiteContent = DEFAULT_CONTENT;
let initialised = false;

// Status apakah published content berhasil dimuat.
let contentLoaded = false;

// ============================================================
// Deep Merge
// ============================================================

function deepMerge<T>(base: T, override: unknown): T {
  if (Array.isArray(base)) {
    return (override ?? base) as T;
  }

  if (base && typeof base === "object") {
    const out: Record<string, unknown> = {
      ...(base as Record<string, unknown>),
    };

    if (override && typeof override === "object") {
      for (const key of Object.keys(
        override as Record<string, unknown>,
      )) {
        out[key] = deepMerge(
          (base as Record<string, unknown>)[key],
          (override as Record<string, unknown>)[key],
        );
      }
    }

    return out as T;
  }

  return (override ?? base) as T;
}

// ============================================================
// Cache
// ============================================================

function setCached(next: SiteContent) {
  cached = next;
  initialised = true;

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
}

// ============================================================
// Published Content Loader
// ============================================================
//
// Mengambil content dari file JSON yang disediakan Vercel.
//
// Tidak ada Supabase di fungsi ini.
//
// ============================================================

async function loadPublishedContent(): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const response = await fetch(
      "/content/site-content.json",
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to load published content: ${response.status}`,
      );
    }

    const data: unknown = await response.json();

    const merged = deepMerge<SiteContent>(
      DEFAULT_CONTENT,
      data,
    );

    setCached(merged);

    contentLoaded = true;

    console.log(
      "[content-store] Published content loaded from Vercel.",
    );
  } catch (error) {
    console.error(
      "[content-store] Failed to load published content:",
      error,
    );

    // Jika JSON belum tersedia atau gagal dimuat,
    // gunakan content lokal sebagai fallback.
    setCached(DEFAULT_CONTENT);

    contentLoaded = false;
  }
}

// ============================================================
// Initialization
// ============================================================

function ensureInit() {
  if (initialised) {
    return;
  }

  initialised = true;

  if (typeof window === "undefined") {
    return;
  }

  void loadPublishedContent();
}

// ============================================================
// External Store Subscription
// ============================================================

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  ensureInit();

  const handler = () => {
    callback();
  };

  window.addEventListener(EVENT, handler);

  return () => {
    window.removeEventListener(EVENT, handler);
  };
}

function getSnapshot(): SiteContent {
  ensureInit();

  return cached;
}

function getServerSnapshot(): SiteContent {
  return DEFAULT_CONTENT;
}

// ============================================================
// Public Hook
// ============================================================
//
// Semua komponen existing tetap bisa menggunakan:
//
// const content = useContent();
//
// Tidak perlu mengubah komponen Public.
//
// ============================================================

export function useContent(): SiteContent {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
}

// ============================================================
// Admin Compatibility
// ============================================================
//
// UNTUK SEMENTARA:
//
// saveContent() dan resetContent() masih berada di file ini
// supaya Admin Panel existing tidak langsung rusak.
//
// Nanti kita pindahkan ke:
//
// src/stores/content-admin.ts
//
// sehingga content-store.tsx benar-benar bebas Supabase.
//
// ============================================================

export async function saveContent(next: SiteContent) {
  // Update local state terlebih dahulu supaya Admin
  // langsung melihat perubahan.
  setCached(next);

  try {
    const { supabase } = await import(
      "@/integrations/supabase/client"
    );

    const { error } = await supabase
      .from("site_content")
      .upsert(
        {
          id: "main",
          data: next,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "id",
        },
      );

    if (error) {
      throw error;
    }

    contentLoaded = true;

    console.log(
      "[content-store] Content saved to Supabase.",
    );
  } catch (error) {
    console.error(
      "[content-store] saveContent failed:",
      error,
    );

    throw error;
  }
}

// ============================================================
// Reset Content
// ============================================================

export async function resetContent() {
  setCached(DEFAULT_CONTENT);

  try {
    const { supabase } = await import(
      "@/integrations/supabase/client"
    );

    const { error } = await supabase
      .from("site_content")
      .upsert(
        {
          id: "main",
          data: DEFAULT_CONTENT,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "id",
        },
      );

    if (error) {
      throw error;
    }

    contentLoaded = true;

    console.log(
      "[content-store] Content reset in Supabase.",
    );
  } catch (error) {
    console.error(
      "[content-store] resetContent failed:",
      error,
    );

    throw error;
  }
}

// ============================================================
// Content Status
// ============================================================

export function isContentLoaded() {
  return contentLoaded;
}

// ============================================================
// WhatsApp Helper
// ============================================================

export function waLink(
  content: SiteContent,
  msg?: string,
) {
  const text =
    msg ?? content.branding.waMessage;

  return `https://wa.me/${content.branding.waNumber}?text=${encodeURIComponent(
    text,
  )}`;
}

// ============================================================
// Title Renderer
// ============================================================

export function renderTitle(t: TitleParts) {
  return (
    <>
      {t.pre}

      {t.em && (
        <em className="text-primary not-italic font-serif italic">
          {t.em}
        </em>
      )}

      {t.post}
    </>
  );
}

// ============================================================
// Content Context
// ============================================================
//
// Dipertahankan untuk kompatibilitas dengan kode existing.
//
// ============================================================

export const ContentContext =
  createContext<SiteContent | undefined>(
    undefined,
  );

export function ContentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const content = useContent();

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContentContext() {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error(
      "useContentContext must be used inside ContentProvider",
    );
  }

  return context;
}
