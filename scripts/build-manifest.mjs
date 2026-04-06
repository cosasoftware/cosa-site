import fs from "fs";
import path from "path";

const root = "public/shots";
const manifestPath = path.join(root, "manifest.json");

// Load existing (to preserve order/titles if present)
let existing = {};
try { existing = JSON.parse(fs.readFileSync(manifestPath, "utf8")); } catch {}

const dirs = fs.readdirSync(root, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

// Build images list for each dir
const images = {};
for (const dir of dirs) {
  const files = fs.readdirSync(path.join(root, dir))
    .filter(f => /\.(png|jpe?g|webp)$/i.test(f))
    .sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));
  if (files.length) images[dir] = files.map(f => `${dir}/${f}`);
}

// Order: keep existing if present, else alphabetical
const order = Array.isArray(existing.order) ? existing.order.filter(k => images[k]) : dirs.sort();

// Titles: keep existing; you can add custom ones here later
const titles = typeof existing.titles === "object" ? existing.titles : {};

const out = { order, titles, images };
fs.writeFileSync(manifestPath, JSON.stringify(out, null, 2));
console.log("✓ wrote", manifestPath, "with", Object.values(images).reduce((n,a)=>n+a.length,0), "images");
