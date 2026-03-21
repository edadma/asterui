import { readFileSync, writeFileSync } from 'fs'

const [find, replace, ...files] = process.argv.slice(2)

if (!find || !replace || files.length === 0) {
  console.error('Usage: tsx scripts/replace-in-files.ts <find> <replace> <file1> [file2] ...')
  process.exit(1)
}

for (const file of files) {
  const content = readFileSync(file, 'utf8')
  const updated = content.replaceAll(find, replace)
  if (content !== updated) {
    writeFileSync(file, updated)
    console.log(`  ${file}: replaced`)
  }
}
