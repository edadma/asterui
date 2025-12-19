#!/usr/bin/env python3
"""
Converts component pages from old format to new examples array format.
Extracts code examples and API data, generates new page structure.
"""

import re
import os
from pathlib import Path

def extract_code_variables(content: str) -> list:
    """Extract code variable definitions from frontmatter."""
    examples = []
    # Match const xxxCode = `...`; patterns
    pattern = r"const (\w+)Code = `([\s\S]*?)`;"
    for match in re.finditer(pattern, content):
        var_name = match.group(1)
        code = match.group(2)
        # Convert variable name to id (camelCase to kebab-case)
        id_name = re.sub(r'([a-z])([A-Z])', r'\1-\2', var_name).lower()
        examples.append({
            'id': id_name,
            'var_name': var_name,
            'code': code
        })
    return examples

def extract_api_props(content: str) -> list:
    """Extract API props array."""
    # Look for apiProps or specific component Api arrays
    pattern = r"const (\w*[Aa]pi(?:Props)?) = \[([\s\S]*?)\];"
    matches = re.findall(pattern, content)
    return matches

def extract_section_info(content: str) -> list:
    """Extract section titles and descriptions from HTML."""
    sections = []
    # Match sections with h2 titles
    pattern = r'<section class="space-y-4">\s*<h2 class="text-2xl font-bold">([^<]+)</h2>\s*<p class="text-base-content/70">([^<]+)</p>'
    for match in re.finditer(pattern, content):
        sections.append({
            'title': match.group(1),
            'description': match.group(2)
        })
    return sections

def get_demo_script_name(content: str) -> str:
    """Get the demo script import path."""
    match = re.search(r"import '\.\./\.\./scripts/(\w+Demos\.tsx)';", content)
    return match.group(1) if match else None

def get_component_name(filepath: str) -> str:
    """Get component name from filepath."""
    basename = os.path.basename(filepath).replace('.astro', '')
    return basename.title().replace('-', '')

def generate_new_page(filepath: str) -> str:
    """Generate new page content in examples array format."""
    with open(filepath, 'r') as f:
        content = f.read()

    examples = extract_code_variables(content)
    sections = extract_section_info(content)
    api_matches = extract_api_props(content)
    demo_script = get_demo_script_name(content)
    component_name = get_component_name(filepath)

    # Match examples with sections
    for i, example in enumerate(examples):
        if i < len(sections):
            example['title'] = sections[i]['title']
            example['description'] = sections[i]['description']
        else:
            example['title'] = example['var_name'].replace('_', ' ').title()
            example['description'] = f'{example["var_name"]} example.'

    return examples, api_matches, demo_script, component_name

if __name__ == '__main__':
    import sys
    if len(sys.argv) < 2:
        print("Usage: python convert-pages.py <component.astro>")
        sys.exit(1)

    filepath = sys.argv[1]
    examples, api, script, name = generate_new_page(filepath)

    print(f"Component: {name}")
    print(f"Demo script: {script}")
    print(f"\nExamples ({len(examples)}):")
    for ex in examples:
        print(f"  - {ex['id']}: {ex.get('title', 'N/A')}")
    print(f"\nAPI arrays ({len(api)}):")
    for api_name, _ in api:
        print(f"  - {api_name}")
