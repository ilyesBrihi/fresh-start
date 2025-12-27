#!/usr/bin/env node

/* ======================================================
 *  Fresh Start – Theme Builder
 * ======================================================
 *  - Merges modular theme JSON files
 *  - Resolves {{variables}} from theme-colors.json
 *  - Preserves tokenColors ordering
 * ====================================================== */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* ===================== PATH SETUP ===================== */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const THEMES_DIR = path.join(__dirname, "..", "themes");
const OUTPUT_FILE = path.join(THEMES_DIR, "./original/fresh-start.json");

const COLORS_FILE = "./original/theme-colors.json";
const METADATA_FILE = "./original/metadata.json";

/* ===================== CONSOLE HELPERS ===================== */

const log = {
  section: (title) =>
    console.log(`\n\u001b[1m\u001b[36m▸ ${title}\u001b[0m`),

  info: (msg) =>
    console.log(`  \u001b[90m•\u001b[0m ${msg}`),

  success: (msg) =>
    console.log(`  \u001b[32m✔\u001b[0m ${msg}`),

  warn: (msg) =>
    console.warn(`  \u001b[33m⚠\u001b[0m ${msg}`),

  error: (msg) =>
    console.error(`  \u001b[31m✖\u001b[0m ${msg}`),
};

/* ===================== FILE HELPERS ===================== */

function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    log.error(`Failed to read ${path.basename(filePath)} — ${e.message}`);
    return null;
  }
}

function readJSONWithVars(filePath, vars) {
  try {
    let text = fs.readFileSync(filePath, "utf8");

    text = text.replace(/\{\{\s*([a-zA-Z0-9_-]+)\s*\}\}/g, (_, key) => {
      if (!(key in vars)) {
        log.warn(`Missing variable {{${key}}} in ${path.basename(filePath)}`);
        return `{{${key}}}`;
      }
      return vars[key];
    });

    return JSON.parse(text);
  } catch (e) {
    log.error(`Failed to process ${path.basename(filePath)} — ${e.message}`);
    return null;
  }
}

/* ===================== MERGE LOGIC ===================== */

const merged = {
  colors: {},
  tokenColors: [],
};

let processedFiles = 0;

function mergeThemeFile(filePath, vars) {
  const name = path.basename(filePath);

  if ([OUTPUT_FILE, COLORS_FILE, METADATA_FILE].includes(name)) return;

  log.info(`Processing ${name}`);

  const json = readJSONWithVars(filePath, vars);
  if (!json) return;

  if (json.colors) {
    Object.assign(merged.colors, json.colors);
    log.success(`Added ${Object.keys(json.colors).length} colors`);
  }

  if (Array.isArray(json.tokenColors)) {
    merged.tokenColors.push(...json.tokenColors);
    log.success(`Added ${json.tokenColors.length} token colors`);
  }

  processedFiles++;
}

function walk(dir, vars) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      log.section(`Entering ${entry.name}`);
      walk(fullPath, vars);
    } else if (entry.name.endsWith(".json")) {
      mergeThemeFile(fullPath, vars);
    }
  }
}

/* ===================== MAIN ===================== */

function main() {
  console.clear();
  console.log("\u001b[1mFresh Start Theme Builder\u001b[0m");

  log.section("Loading variables");

  const varsPath = path.join(THEMES_DIR, COLORS_FILE);
  log.info(`Source: ${varsPath}`);

  const varsFile = readJSON(varsPath);
  const vars = varsFile?.colors ?? {};

  log.success(`Loaded ${Object.keys(vars).length} variables`);

  log.section("Scanning theme directory");
  walk(THEMES_DIR, vars);

  log.section("Merge summary");
  log.success(`Files processed: ${processedFiles}`);
  log.success(`Total colors: ${Object.keys(merged.colors).length}`);
  log.success(`Total token colors: ${merged.tokenColors.length}`);

  log.section("Building final theme");

  const metadata =
    readJSON(path.join(THEMES_DIR, METADATA_FILE)) ?? { name: "Fresh Start" };

  const finalTheme = {
    ...metadata,
    colors: merged.colors,
    tokenColors: merged.tokenColors,
  };

  try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalTheme, null, "\t"), "utf8");
    log.success(`Theme built successfully`);
    log.info(`Output: ${OUTPUT_FILE}`);
  } catch (e) {
    log.error(`Failed to write output — ${e.message}`);
  }
}

main();
