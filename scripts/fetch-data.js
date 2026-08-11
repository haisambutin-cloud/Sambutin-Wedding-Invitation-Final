import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabasePublishableKey =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "VITE_SUPABASE_URL atau VITE_SUPABASE_PUBLISHABLE_KEY belum tersedia."
  );
}

const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);

console.log("Mengambil data dari Supabase...");

const { data, error } = await supabase
  .from("site_content")
  .select("data, updated_at")
  .eq("id", "main")
  .single();

if (error) {
  console.error("Gagal mengambil data dari Supabase:");
  console.error(error);
  process.exit(1);
}

if (!data?.data) {
  console.error("Data JSON tidak ditemukan.");
  process.exit(1);
}

const outputDir = path.join(
  __dirname,
  "..",
  "public",
  "data"
);

const outputFile = path.join(
  outputDir,
  "catalog.json"
);

fs.mkdirSync(outputDir, {
  recursive: true,
});

fs.writeFileSync(
  outputFile,
  JSON.stringify(data.data, null, 2),
  "utf-8"
);

console.log("=================================");
console.log("✓ Data berhasil diambil");
console.log(`✓ Updated at: ${data.updated_at}`);
console.log(`✓ Output: ${outputFile}`);
console.log("=================================");