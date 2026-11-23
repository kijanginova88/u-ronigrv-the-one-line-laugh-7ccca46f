import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// One funny line, a single sentence of at most 200 characters.
const LINE =
  "My smartwatch just congratulated me for standing up, which is the saddest applause I have ever received.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
