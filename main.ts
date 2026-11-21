import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `A bell lies in the silt of an old harbor.
The ship that brought it went down
before the harbor had a name.

Light thins as it sinks;
the name on the bell turns green.
Tides pass. Ferries pass.
It has not rung, and is not asked to.

The water holds it without a reason.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, TEXT, "utf8");

// This poem is a slow drowning measured in line breaks, not words.
// The first stanza names a loss the harbor itself forgot to keep;
// the second lets color drain until only green patience remains.
// We preserve every blank line as a held breath underwater, refuse
// to explain the bell, and let the final sentence settle like silt
// with no reason given, because the water never offers one.
function describeOutput(outDir: string, chars: number): string {
  return `[awe-name-v4] ${chars} chars written to ${outDir}`;
}

console.error(describeOutput(outDir, TEXT.length));
