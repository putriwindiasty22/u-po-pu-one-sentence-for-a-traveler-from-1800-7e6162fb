import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 200 characters, explaining the modern internet
// to a traveler arriving from 1800 — built only from things they know:
// a road, a post office, a library.
const sentence =
  "Picture one road joining every post office and library on earth, where a letter you send arrives in a breath and any book you ask for opens before you.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (sentence.length < 1 || sentence.length > 200) {
  throw new Error(`sentence is ${sentence.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
