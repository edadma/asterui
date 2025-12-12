#!/usr/bin/env node

import * as p from '@clack/prompts'
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pc from 'picocolors'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DAISYUI_THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
  'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
]

type PackageManager = 'npm' | 'pnpm' | 'yarn'

function detectPackageManager(): PackageManager {
  const userAgent = process.env.npm_config_user_agent || ''
  if (userAgent.includes('pnpm')) return 'pnpm'
  if (userAgent.includes('yarn')) return 'yarn'
  return 'npm'
}

function getInstallCommand(pm: PackageManager): string {
  return pm === 'yarn' ? 'yarn' : `${pm} install`
}

function getRunCommand(pm: PackageManager): string {
  return pm === 'npm' ? 'npm run' : pm
}

async function main() {
  console.log()
  p.intro(pc.bgCyan(pc.black(' create-asterui ')))

  const detectedPm = detectPackageManager()

  const options = await p.group(
    {
      projectName: () =>
        p.text({
          message: 'Project name',
          placeholder: 'my-asterui-app',
          defaultValue: 'my-asterui-app',
          validate: (value) => {
            if (!value) return 'Project name is required'
            if (!/^[a-z0-9-]+$/.test(value)) return 'Project name must be lowercase with hyphens only'
            if (fs.existsSync(value)) return `Directory "${value}" already exists`
          },
        }),

      language: () =>
        p.select({
          message: 'Language',
          options: [
            { value: 'ts', label: 'TypeScript', hint: 'recommended' },
            { value: 'js', label: 'JavaScript' },
          ],
        }),

      themePreset: () =>
        p.select({
          message: 'Themes',
          options: [
            { value: 'light-dark', label: 'Light/Dark', hint: 'recommended' },
            { value: 'business', label: 'Business/Corporate' },
            { value: 'all', label: 'All themes' },
            { value: 'custom', label: 'Choose specific...' },
          ],
        }),

      customThemes: ({ results }) =>
        results.themePreset === 'custom'
          ? p.multiselect({
              message: 'Select themes',
              options: DAISYUI_THEMES.map((t) => ({ value: t, label: t })),
              initialValues: ['light', 'dark'],
              required: true,
            })
          : Promise.resolve([]),

      packageManager: () =>
        p.select({
          message: 'Package manager',
          options: [
            { value: detectedPm, label: detectedPm, hint: 'detected' },
            ...(['npm', 'pnpm', 'yarn'] as const)
              .filter((pm) => pm !== detectedPm)
              .map((pm) => ({ value: pm, label: pm })),
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.')
        process.exit(0)
      },
    }
  )

  const s = p.spinner()
  s.start('Creating project...')

  const projectDir = path.resolve(process.cwd(), options.projectName)
  const templateDir = path.join(__dirname, '..', 'templates', options.language as string)

  // Create project directory
  fs.mkdirSync(projectDir, { recursive: true })
  fs.mkdirSync(path.join(projectDir, 'src'), { recursive: true })

  // Copy template files
  copyDir(templateDir, projectDir)

  // Generate package.json
  const packageJson = generatePackageJson(
    options.projectName,
    options.language as string
  )
  fs.writeFileSync(path.join(projectDir, 'package.json'), JSON.stringify(packageJson, null, 2))

  // Generate index.css with theme config
  const themes = getThemes(options.themePreset as string, options.customThemes as string[])
  const cssContent = generateCss(themes)
  fs.writeFileSync(path.join(projectDir, 'src', 'index.css'), cssContent)

  s.stop('Project created!')

  const pm = options.packageManager as PackageManager

  // Run install
  s.start('Installing dependencies...')
  await runInstall(pm, projectDir)
  s.stop('Dependencies installed!')

  p.note(
    `cd ${options.projectName}\n${getRunCommand(pm)} dev`,
    'Next steps'
  )

  p.outro(pc.green('Happy coding!'))
}

function runInstall(pm: PackageManager, cwd: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const cmd = pm === 'npm' ? 'npm' : pm
    const args = pm === 'yarn' ? [] : ['install']
    const child = spawn(cmd, args, { cwd, stdio: 'ignore' })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Install failed with code ${code}`))
    })
    child.on('error', reject)
  })
}

function copyDir(src: string, dest: string) {
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true })
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function generatePackageJson(name: string, language: string) {
  const isTs = language === 'ts'

  const pkg: Record<string, unknown> = {
    name,
    private: true,
    version: '0.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: isTs ? 'tsc -b && vite build' : 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      asterui: '^0.12.0',
      react: '^19.0.0',
      'react-dom': '^19.0.0',
      'react-hook-form': '^7.0.0',
    } as Record<string, string>,
    devDependencies: {
      '@tailwindcss/vite': '^4.1.0',
      '@vitejs/plugin-react': '^5.1.0',
      daisyui: '^5.0.0',
      tailwindcss: '^4.1.0',
      vite: '^7.0.0',
    } as Record<string, string>,
  }

  if (isTs) {
    (pkg.devDependencies as Record<string, string>)['typescript'] = '^5.6.0';
    (pkg.devDependencies as Record<string, string>)['@types/react'] = '^19.0.0';
    (pkg.devDependencies as Record<string, string>)['@types/react-dom'] = '^19.0.0'
  }

  return pkg
}

function getThemes(preset: string, customThemes: string[]): string[] {
  switch (preset) {
    case 'light-dark':
      return ['light', 'dark']
    case 'business':
      return ['corporate', 'business']
    case 'all':
      return []
    case 'custom':
      return customThemes
    default:
      return ['light', 'dark']
  }
}

function generateCss(themes: string[]): string {
  let daisyPlugin: string
  if (themes.length === 0) {
    // All themes
    daisyPlugin = '@plugin "daisyui";'
  } else if (themes.length === 2 && (
    (themes[0] === 'light' && themes[1] === 'dark') ||
    (themes[0] === 'corporate' && themes[1] === 'business')
  )) {
    // Light/dark pair with prefersDark
    daisyPlugin = `@plugin "daisyui" {
  themes: ${themes[0]} --default, ${themes[1]} --prefersDark;
}`
  } else {
    // Custom selection
    daisyPlugin = `@plugin "daisyui" {
  themes: ${themes.join(', ')};
}`
  }

  return `@import "tailwindcss";
${daisyPlugin}
@source "../node_modules/asterui";
`
}

main().catch(console.error)
