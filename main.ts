// Funniest Sign on a Haunted Server Room Door
// u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a
// One line, at most 120 characters, written as a real door sign.
// The program writes the sign to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "DO NOT KNOCK. The servers have started whispering again, and the ghost answers the door faster than IT support.";

// Count characters the way the gate does: one count per code point, so a
// character outside the BMP never slips past the 120-character cap, and
// reject any line break outright so the entry stays a single printed line.
const text = ENTRY.trim();
const length = [...text].length;
if (length < 1 || length > 120 || /[\r\n]/.test(text)) {
  throw new Error(`entry must be one line of 1-120 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
