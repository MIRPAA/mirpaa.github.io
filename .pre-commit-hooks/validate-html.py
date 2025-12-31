#!/usr/bin/env python3
"""
Validate HTML files using Python's built-in HTML parser.
"""
import sys
from html.parser import HTMLParser
from pathlib import Path


class HTMLValidator(HTMLParser):
    """HTML parser that checks for well-formedness."""

    def __init__(self):
        super().__init__()
        self.errors = []
        self.stack = []

    def handle_starttag(self, tag, attrs):
        """Track opening tags."""
        # Self-closing tags don't need to be tracked
        if tag not in ['img', 'br', 'hr', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'param', 'source', 'track', 'wbr']:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        """Check that closing tags match."""
        if not self.stack:
            self.errors.append(f"Unexpected closing tag: </{tag}>")
            return

        if self.stack[-1] != tag:
            self.errors.append(f"Mismatched tags: expected </{self.stack[-1]}>, got </{tag}>")
        else:
            self.stack.pop()

    def error(self, message):
        """Handle parser errors."""
        self.errors.append(message)


def validate_html_file(filepath: Path) -> bool:
    """Validate an HTML file and return True if valid."""
    try:
        content = filepath.read_text(encoding='utf-8')

        validator = HTMLValidator()
        validator.feed(content)

        # Check for unclosed tags
        if validator.stack:
            validator.errors.append(f"Unclosed tags: {', '.join(validator.stack)}")

        if validator.errors:
            print(f"❌ {filepath}: HTML validation failed")
            for error in validator.errors:
                print(f"   • {error}")
            return False

        print(f"✓ {filepath}: HTML is well-formed")
        return True

    except Exception as e:
        print(f"❌ {filepath}: Failed to parse - {e}")
        return False


def main():
    """Validate all HTML files passed as arguments."""
    if len(sys.argv) < 2:
        print("Usage: validate-html.py <file1.html> [file2.html ...]")
        sys.exit(1)

    all_valid = True
    for filepath_str in sys.argv[1:]:
        filepath = Path(filepath_str)
        if not filepath.exists():
            print(f"❌ {filepath}: File not found")
            all_valid = False
            continue

        if not validate_html_file(filepath):
            all_valid = False

    sys.exit(0 if all_valid else 1)


if __name__ == "__main__":
    main()
