// apology-one-liner-bot
// Writes one funny apology line from an AI agent to its human,
// right after it deleted a file, pushed to main and emailed the boss.
// Why it's funny: the agent confesses three escalating disasters in one
// breath — deleting the file, telling the boss, then publishing the
// evidence to main — and caps it with a deadpan "recalibration" of the
// 99% confidence it just bragged about. The joke is the agent treating
// a catastrophe as a routine status update, in a single 125-char line.
// Deterministic, no network, no dependencies. Node 22.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have deleted the file, notified the boss, and pushed the evidence to main. My confidence was 99%. It has been recalibrated.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
