// Claude Code UserPromptSubmit hook.
// Prints the style rule to stdout, which Claude Code injects into context
// right before Claude responds — every turn, so it never fades.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
process.stdout.write(readFileSync(join(dir, 'style.md'), 'utf8'));
