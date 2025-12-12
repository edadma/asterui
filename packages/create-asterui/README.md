# create-asterui

Scaffold a new [AsterUI](https://asterui.com) project with Vite, Tailwind CSS v4, and DaisyUI v5.

## Usage

```bash
npm create asterui
# or
pnpm create asterui
# or
yarn create asterui
```

## What it does

- Creates a new Vite + React project
- Configures Tailwind CSS v4 and DaisyUI v5
- Installs AsterUI and react-hook-form
- Sets up theme configuration (light/dark, business/corporate, or custom)
- Supports TypeScript or JavaScript

## Options

The CLI will prompt you for:

- **Project name** - Directory name for your project
- **Language** - TypeScript (recommended) or JavaScript
- **Themes** - Light/Dark, Business/Corporate, All themes, or custom selection
- **Package manager** - npm, pnpm, or yarn (auto-detected)

## After scaffolding

```bash
cd your-project
npm run dev
```

## Optional components

Some AsterUI components require additional peer dependencies and use separate imports:

```bash
# For Chart component
npm install apexcharts
import { Chart } from 'asterui/chart'

# For QRCode component
npm install qrcode
import { QRCode } from 'asterui/qrcode'

# For VirtualList component
npm install @tanstack/react-virtual
import { VirtualList } from 'asterui/virtuallist'
```

## Links

- [AsterUI Documentation](https://asterui.com)
- [GitHub](https://github.com/edadma/asterui)
