#!/usr/bin/env python3
"""Fix toggle code by adding inline script with is:inline directive."""

import re
from pathlib import Path

COMPONENTS_DIR = Path(__file__).parent.parent / "src" / "pages" / "components"

# Pattern to match the codeToggle import
OLD_PATTERN = re.compile(r"  import '../../scripts/codeToggle';")

# Inline toggle code with is:inline directive
REPLACEMENT = '''</script>

<script is:inline>
  // Toggle code visibility - runs inline after DOM is ready
  document.querySelectorAll('.toggle-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.example-card');
      if (card) {
        card.classList.toggle('open');
        const panel = card.querySelector('.code-panel');
        const tooltip = btn.closest('.tooltip');
        if (card.classList.contains('open')) {
          panel?.setAttribute('aria-hidden', 'false');
          tooltip?.setAttribute('data-tip', 'Hide code');
        } else {
          panel?.setAttribute('aria-hidden', 'true');
          tooltip?.setAttribute('data-tip', 'Show code');
        }
      }
    });
  });'''

def fix_file(filepath: Path) -> bool:
    """Fix a single component file. Returns True if file was modified."""
    content = filepath.read_text()

    if OLD_PATTERN.search(content):
        new_content = OLD_PATTERN.sub(REPLACEMENT, content)
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
