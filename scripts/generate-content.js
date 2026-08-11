import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

// ============================================================
// Load environment variables
// ============================================================

// Load .env
dotenv.config();

// Load .env.local
dotenv.config({
  path: ".env.local",
  override: true,
});

// ============================================================
// Environment
// ============================================================

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error(
    "SUPABASE_URL belum tersedia di .env"
  );
}

if (!supabaseSecretKey) {
  throw new Error(
    "SUPABASE_SECRET_KEY belum tersedia di .env.local"
  );
}

// ============================================================
// Supabase Client
// ============================================================

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey
);

// ============================================================
// Configuration
// ============================================================

const CONTENT_ID = "main";

const outputDir = path.resolve(
  "public",
  "content"
);

const outputFile = path.join(
  outputDir,
  "site-content.json"
);

// ============================================================
// Generate Content
// ============================================================

async function generateContent() {
  console.log("=================================");
  console.log("Generating published content...");
  console.log("=================================");

  console.log("Mengambil data dari Supabase...");

  const { data, error } = await supabase
    .from("site_content")
    .select("id, data, updated_at")
    .eq("id", CONTENT_ID)
    .single();

  if (error) {
    console.error(
      "❌ Gagal mengambil data dari Supabase:"
    );
    console.error(error);
    process.exit(1);
  }

  if (!data) {
    console.error(
      `❌ Data dengan id "${CONTENT_ID}" tidak ditemukan.`
    );
    process.exit(1);
  }

  if (!data.data) {
    console.error(
      `❌ Kolom "data" untuk id "${CONTENT_ID}" kosong.`
    );
    process.exit(1);
  }

  console.log("✓ Data berhasil diambil");
  console.log(`✓ ID: ${data.id}`);
  console.log(`✓ Updated: ${data.updated_at}`);

  // ==========================================================
  // Create output directory
  // ==========================================================

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  // ==========================================================
  // Write JSON
  // ==========================================================

  fs.writeFileSync(
    outputFile,
    JSON.stringify(data.data, null, 2),
    "utf8"
  );

  // ==========================================================
  // File information
  // ==========================================================

  const stats = fs.statSync(outputFile);

  console.log("");
  console.log("=================================");
  console.log("✓ Content berhasil dibuat");
  console.log("=================================");
  console.log(`✓ File: ${outputFile}`);
  console.log(
    `✓ Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`
  );
  console.log("=================================");
}

// ============================================================
// Run
// ============================================================

generateContent().catch((error) => {
  console.error(
    "❌ Unexpected error:"
  );

  console.error(error);

  process.exit(1);
});