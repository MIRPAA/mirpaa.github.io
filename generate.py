#!/usr/bin/env python3
"""
Generate the static website from Mako templates and text files.
"""
import subprocess
import sys
import pathlib
import mako.template


def read_text_file(filepath: pathlib.Path) -> str:
    """Read a text file and return its contents."""
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read().strip()


def load_staff_member(member_dir: pathlib.Path) -> dict:
    """Load staff member data from a directory."""
    return {
        "name": read_text_file(member_dir / "name.txt"),
        "title": read_text_file(member_dir / "title.txt"),
        "image": read_text_file(member_dir / "image.txt"),
        "bio": read_text_file(member_dir / "bio.txt"),
    }


def run_precommit() -> bool:
    """Run pre-commit hooks on all files. Returns True if successful."""
    result = subprocess.run(
        ["pre-commit", "run", "--all-files"],
        capture_output=True,
        text=True,
    )
    return result.returncode == 0


def main():
    """Generate the index.html file from the Mako template."""
    templates_dir = pathlib.Path("templates")

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
    template = mako.template.Template(filename=str(template_path), input_encoding="utf-8")
    output = template.render(**context)

    # Write the output to docs/index.html
    output_path = pathlib.Path("docs") / "index.html"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(output)

    print(f"✓ Generated {output_path}")
    print(f"  - Loaded {len(staff_members)} staff members")

    # Run pre-commit hooks up to 3 times
    print("\nRunning pre-commit hooks...")
    max_attempts = 3
    for attempt in range(1, max_attempts + 1):
        print(f"  Attempt {attempt}/{max_attempts}...")
        if run_precommit():
            print("✓ Pre-commit hooks passed")
            break
        elif attempt < max_attempts:
            print(f"  ⚠ Pre-commit modified files, retrying...")
        else:
            print("✗ Pre-commit hooks failed after 3 attempts")
            sys.exit(1)


if __name__ == "__main__":
    main()
