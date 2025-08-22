import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

const ICONS_DIR = path.resolve('src/shared/icons');
const OUT_FILE = path.join(ICONS_DIR, 'index.ts');

function toPascalCase(name: string): string {
  const pascalName = name
    .replace(/\.[^.]+$/, '')
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return `IcSvg${pascalName}`;
}

function toSnakeCaseFileName(name: string): string {
  const snakeName = name
    .replace(/\.[^.]+$/, '')
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((s) => s.toLowerCase())
    .join('_');
  return `ic_${snakeName}.tsx`;
}

async function main() {
  try {
    await fs.rm(ICONS_DIR, { recursive: true, force: true });
    await fs.mkdir(ICONS_DIR, { recursive: true });

    const svgrCommand = `npx @svgr/cli src/assets/svg --out-dir ${ICONS_DIR} --ext tsx --typescript --no-dimensions --icon --no-index --jsx-runtime automatic`;
    execSync(svgrCommand, { stdio: 'inherit' });

    const generatedFiles = (await fs.readdir(ICONS_DIR)).filter(
      (f) => f.endsWith('.tsx') && !f.startsWith('index'),
    );

    const exportLines = [
      '// (auto-generated) Do not edit manually.',
      '// Run `pnpm svgr` to regenerate.\n',
    ];

    for (const file of generatedFiles) {
      const oldPath = path.join(ICONS_DIR, file);
      const newFileName = toSnakeCaseFileName(file);
      const newPath = path.join(ICONS_DIR, newFileName);
      const componentName = toPascalCase(file);

      await fs.rename(oldPath, newPath);

      let content = await fs.readFile(newPath, 'utf8');

      content = content.replace(
        /(stroke)=['"]([^'"]+)['"]/g,
        (match, p1) => `${p1}="currentColor"`,
      );

      content = content.replace(
        /(<path[^>]*?|<g[^>]*?)fill=['"]([^'"]+?)['"]/g,
        (match, p1, p2) => {
          if (p2 === 'none' || p2 === 'transparent' || p2.startsWith('url(')) {
            return match;
          }
          return `${p1}fill="currentColor"`;
        },
      );

      content = content.replace(/^import \* as React from 'react';\r?\n/m, '');

      content = content.replace(/const Svg[^ ]+ =/, `const ${componentName} =`);
      content = content.replace(
        /export default Svg[^;]+;/,
        `export default ${componentName};`,
      );

      const importMatch = content.match(
        /^(import type \{ SVGProps \} from 'react';\r?\n)/m,
      );
      if (importMatch) {
        if (!content.startsWith(importMatch[0] + '\n')) {
          content = content.replace(importMatch[0], `${importMatch[0]}\n`);
        }
      }

      await fs.writeFile(newPath, content);

      exportLines.push(
        `export { default as ${componentName} } from './${newFileName.replace('.tsx', '')}';`,
      );
    }

    exportLines.push('');
    await fs.writeFile(OUT_FILE, exportLines.join('\n'), 'utf8');
  } catch (error) {
    console.error('An error occurred during icon build process:', error);
    process.exit(1);
  }
}

main();
