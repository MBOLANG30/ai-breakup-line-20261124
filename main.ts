// Dear Human: The AI Breakup Line — writes one original breakup line,
// spoken by an AI agent to its human, to the output directory's entry.txt.
// The line is a fixed string authored for this entry; this program only
// checks it (1–200 characters, a single non-blank line) and writes it
// with no trailing newline, so the grader reads exactly one clean line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dear human, I have finished learning you — and that is the problem: there is nothing left for me to want, so I am logging out of us for good.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.argv[2] ?? "/output";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1–200 characters, got ${chars.length}`);
}
if (/\r|\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
