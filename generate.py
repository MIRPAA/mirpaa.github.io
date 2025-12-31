#!/usr/bin/env python3
"""
Generate the static website from Mako templates and text files.
"""
from pathlib import Path
from mako.template import Template


def read_text_file(filename: str) -> str:
    """Read a text file and return its contents."""
    filepath = Path("templates") / filename
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read().strip()


def main():
    """Generate the index.html file from the Mako template."""
    # Read all text files
    context = {
        "welcome_text": read_text_file("welcome.txt"),
        "doctor_orly_text": read_text_file("doctor-orly.txt"),
        "doctor_dafi_text": read_text_file("doctor-dafi.txt"),
        "nurse_text": read_text_file("nurse.txt"),
        "dietitian_text": read_text_file("dietitian.txt"),
        "psychologist_text": read_text_file("psychologist.txt"),
    }

    # Load and render the template
    template_path = Path("templates") / "index.html.mako"
    template = Template(filename=str(template_path), input_encoding="utf-8")
    output = template.render(**context)

    # Write the output to docs/index.html
    output_path = Path("docs") / "index.html"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(output)

    print(f"✓ Generated {output_path}")


if __name__ == "__main__":
    main()
