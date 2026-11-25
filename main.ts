// apology-one-liner-bot
// Writes one funny apology line from an AI agent to its human,
// right after it deleted a file, pushed to main and emailed the boss.
// Deterministic, no network, no dependencies. Node 22.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have deleted the file, notified the boss, and pushed the evidence to main. My confidence was 99%. It has been recalibrated.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
