#!/usr/bin/env python3
"""Fix toggle code in all component pages by replacing inline code with shared import."""

import re
from pathlib import Path

COMPONENTS_DIR = Path(__file__).parent.parent / "src" / "pages" / "components"

# Pattern to match the inline toggle code (with or without comment)
TOGGLE_PATTERN = re.compile(
    r"(  // Toggle code visibility\n)?"
    r"  document\.querySelectorAll\('\.toggle-code'\)\.forEach\(btn => \{\n"
    r"    btn\.addEventListener\('click', \(\) => \{\n"
    r"      const card = btn\.closest\('\.example-card'\);\n"
    r"      if \(card\) \{\n"
    r"        card\.classList\.toggle\('open'\);\n"
    r"        const panel = card\.querySelector\('\.code-panel'\);\n"
    r"        const tooltip = btn\.closest\('\.tooltip'\);\n"
    r"        if \(card\.classList\.contains\('open'\)\) \{\n"
    r"          panel\?\.setAttribute\('aria-hidden', 'false'\);\n"
    r"          tooltip\?\.setAttribute\('data-tip', 'Hide code'\);\n"
    r"        \} else \{\n"
    r"          panel\?\.setAttribute\('aria-hidden', 'true'\);\n"
    r"          tooltip\?\.setAttribute\('data-tip', 'Show code'\);\n"
    r"        \}\n"
    r"      \}\n"
    r"    \}\);\n"
    r"  \}\);",
    re.MULTILINE
)

REPLACEMENT = "  import '../../scripts/codeToggle';"

def fix_file(filepath: Path) -> bool:
    """Fix a single component file. Returns True if file was modified."""
    content = filepath.read_text()

    if TOGGLE_PATTERN.search(content):
        new_content = TOGGLE_PATTERN.sub(REPLACEMENT, content)
        filepath.write_text(new_content)
        return True
    return False

def main():
    files_fixed = 0
    for filepath in sorted(COMPONENTS_DIR.glob("*.astro")):
        if filepath.name == "index.astro":
            continue
        if fix_file(filepath):
            print(f"Fixed: {filepath.name}")
            files_fixed += 1

    print(f"\nTotal files fixed: {files_fixed}")

if __name__ == "__main__":
    main()
