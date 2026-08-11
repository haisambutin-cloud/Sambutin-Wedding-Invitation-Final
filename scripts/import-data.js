import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error(
    "VITE_SUPABASE_URL atau SUPABASE_SECRET_KEY belum tersedia."
  );
}

console.log("Supabase URL:", supabaseUrl);
console.log(
  "Key type:",
  supabaseSecretKey.startsWith("sb_secret_")
    ? "SECRET KEY ✓"
    : supabaseSecretKey.startsWith("sb_publishable_")
      ? "PUBLISHABLE KEY ❌"
      : "LEGACY KEY"
);

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

const jsonFile = "./scripts/sambutin-content.json";

console.log("Membaca file JSON...");

const rawData = fs.readFileSync(jsonFile, "utf8");

let content;

try {
  content = JSON.parse(rawData);
} catch (error) {
  console.error("JSON tidak valid:");
  console.error(error);
  process.exit(1);
}

console.log("✓ JSON valid");
console.log(
  `✓ Ukuran file: ${(rawData.length / 1024 / 1024).toFixed(2)} MB`
);

console.log("Mengirim data ke Supabase...");

const { error } = await supabase
  .from("site_content")
  .upsert(
    {
      id: "main",
      data: content,
      updated_at: new Date().toISOString(),
    },
    {
      onConflict: "id",
    }
  );

if (error) {
  console.error("Gagal memasukkan data:");
  console.error(error);
  process.exit(1);
}

console.log("=================================");
console.log("✓ JSON berhasil di-import");
console.log("✓ Table: site_content");
console.log("✓ ID: main");
console.log("=================================");