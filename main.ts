// Alien Field Notes: The Two Day Earth Review
// make.fun competition entry — slug:
// u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
// Writes the winning one-line alien tourist review of Earth to output/entry.txt
// Revision note (2026-11-24): line final — 166 chars, verified.

const fs = require("fs");
const path = require("path");

const ENTRY =
  "I bumped a chair and apologised. The chair said nothing. The human beside me apologised to the chair, then to me, then to the chair again. Filed under: local customs.";

const outDir = path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to output/entry.txt`);
