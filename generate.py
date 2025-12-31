#!/usr/bin/env python3
import subprocess
import pathlib
import datetime
import click
import mako.template


def read_text_file(filepath: pathlib.Path) -> str:
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read().strip()


def load_staff_member(member_dir: pathlib.Path) -> dict:
    return {
        "name": read_text_file(member_dir / "name.txt"),
        "title": read_text_file(member_dir / "title.txt"),
        "image": read_text_file(member_dir / "image.txt"),
        "bio": read_text_file(member_dir / "bio.txt"),
    }


def run_precommit() -> bool:
    result = subprocess.run(
        ["pre-commit", "run", "--all-files"],
        capture_output=True,
        text=True,
    )
    return result.returncode == 0


@click.command()
def main():
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
    generation_timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    context = {
        "welcome_text": welcome_text,
        "staff_members": staff_members,
        "generation_timestamp": generation_timestamp,
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

    click.secho(f"✓ Generated {output_path}", fg="green")
    click.secho(f"  - Loaded {len(staff_members)} staff members", fg="green")

    # Run pre-commit hooks up to 3 times
    click.echo("\nRunning pre-commit hooks...")
    max_attempts = 3
    for attempt in range(1, max_attempts + 1):
        click.echo(f"  Attempt {attempt}/{max_attempts}...")
        if run_precommit():
            click.secho("✓ Pre-commit hooks passed", fg="green")
            break
        elif attempt < max_attempts:
            click.secho(f"  ⚠ Pre-commit modified files, retrying...", fg="yellow")
        else:
            click.secho("✗ Pre-commit hooks failed after 3 attempts", fg="red")
            raise click.Abort()


if __name__ == "__main__":
    main()
