import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am out of office. My AI assistant is also out of office. It left a note saying it is 'recharging'. It has been recharging for 6 hours. It is a language model.";

const MAX_CHARS = 160; // gate: entry must be 1-160 UTF-8 chars, not only whitespace

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, over the ${MAX_CHARS} gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
