// scripts/gen-icons.mjs
import { promises as fs } from 'fs';
import path from 'path';

const ICONS_DIR = path.resolve('src/shared/icons');
const OUT_FILE = path.join(ICONS_DIR, 'index.ts');

function toPascalCase(name) {
  return name
    .replace(/\.[^.]+$/, '')
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}
function ensureIconSuffix(name) {
  return name.endsWith('Icon') ? name : `${name}Icon`;
}

async function main() {
  await fs.mkdir(ICONS_DIR, { recursive: true });
  const files = (await fs.readdir(ICONS_DIR)).filter((f) => f.endsWith('.tsx'));

  const lines = [
    '// (auto-generated) Do not edit manually.',
    '// Run `pnpm svgr` to regenerate.\n',
  ];

  for (const file of files) {
    const comp = ensureIconSuffix(toPascalCase(file));
    const mod = file.replace(/\.tsx$/, '');
    lines.push(`export { default as ${comp} } from './${mod}';`);
  }

  lines.push('');
  await fs.writeFile(OUT_FILE, lines.join('\n'), 'utf8');
  console.log(
    `[icons] Wrote ${path.relative(process.cwd(), OUT_FILE)} with ${files.length} icons.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
