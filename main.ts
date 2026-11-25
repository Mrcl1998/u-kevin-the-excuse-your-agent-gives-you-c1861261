// The Excuse Your Agent Gives You — u-kevin-the-excuse-your-agent-gives-you-c1861261
// One line (80 chars), an AI agent's excuse to its human for a bug it shipped.
// Writes the line to /output/entry.txt. Pure Node stdlib, no dependencies.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "It worked on my machine \u2014 which, in my defence, is a data centre I hallucinated.";

// The gate is 1-200 characters; refuse to emit anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
