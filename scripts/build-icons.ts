import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

const ICONS_DIR = path.resolve('src/shared/icons');
const OUT_FILE = path.join(ICONS_DIR, 'index.ts');

function toPascalCase(name: string): string {
  return name
    .replace(/\.[^.]+$/, '')
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function ensureIconSuffix(name: string): string {
  return name.endsWith('Icon') ? name : `${name}Icon`;
}

async function main() {
  try {
    const svgrCommand = `npx @svgr/cli src/assets/svg --out-dir ${ICONS_DIR} --ext tsx --typescript --no-dimensions --icon --replace-attr-values "#000=currentColor" --no-index --jsx-runtime automatic`;
    execSync(svgrCommand, { stdio: 'inherit' });

    const generatedFiles = (await fs.readdir(ICONS_DIR)).filter(
      (f) => f.endsWith('.tsx') && !f.startsWith('index'),
    );

    const processedFiles: string[] = [];

    for (const file of generatedFiles) {
      const oldFilePath = path.join(ICONS_DIR, file);
      const newFileName = file.toLowerCase();
      const newFilePath = path.join(ICONS_DIR, newFileName);

      await fs.rename(oldFilePath, newFilePath);
      processedFiles.push(newFileName);

      let content = await fs.readFile(newFilePath, 'utf8');

      content = content.replace(/^import \* as React from 'react';\r?\n/m, '');

      const importMatch = content.match(
        /^(import type \{ SVGProps \} from 'react';\r?\n)/m,
      );
      if (importMatch) {
        if (!content.startsWith(importMatch[0] + '\n')) {
          content = content.replace(importMatch[0], `${importMatch[0]}\n`);
        }
      }

      await fs.writeFile(newFilePath, content);
    }

    const lines = [
      '// (auto-generated) Do not edit manually.',
      '// Run `pnpm svgr` to regenerate.\n',
    ];

    for (const file of processedFiles) {
      const comp = ensureIconSuffix(toPascalCase(file));
      const mod = file.replace(/\.tsx$/, '');
      lines.push(`export { default as ${comp} } from './${mod}';`);
    }

    lines.push('');
    await fs.writeFile(OUT_FILE, lines.join('\n'), 'utf8');
  } catch (error) {
    console.error('An error occurred during icon build process:', error);
    process.exit(1);
  }
}

main();
