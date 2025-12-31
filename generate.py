#!/usr/bin/env python3
"""
Generate the static website from Mako templates and text files.
"""
from pathlib import Path
from mako.template import Template


def read_text_file(filepath: Path) -> str:
    """Read a text file and return its contents."""
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read().strip()


def load_staff_member(member_dir: Path) -> dict:
    """Load staff member data from a directory."""
    return {
        "name": read_text_file(member_dir / "name.txt"),
        "title": read_text_file(member_dir / "title.txt"),
        "image": read_text_file(member_dir / "image.txt"),
        "bio": read_text_file(member_dir / "bio.txt"),
    }


def main():
    """Generate the index.html file from the Mako template."""
    templates_dir = Path("templates")

    # Read welcome text
    welcome_text = read_text_file(templates_dir / "welcome.txt")

    # Load all staff members (in a specific order)
    staff_order = ["orly", "dafi", "nurse", "dietitian", "psychologist"]
    staff_members = []

    for member_id in staff_order:
        member_dir = templates_dir / member_id
        if member_dir.exists():
            staff_members.append(load_staff_member(member_dir))

    # Prepare template context
    context = {
        "welcome_text": welcome_text,
        "staff_members": staff_members,
    }

    # Load and render the template
    template_path = templates_dir / "index.html.mako"
    template = Template(filename=str(template_path), input_encoding="utf-8")
    output = template.render(**context)

    # Write the output to docs/index.html
    output_path = Path("docs") / "index.html"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(output)

    print(f"✓ Generated {output_path}")
    print(f"  - Loaded {len(staff_members)} staff members")


if __name__ == "__main__":
    main()
