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


def load_staff_members(templates_dir: pathlib.Path) -> list[dict]:
    staff_order = ["orly", "dafi", "nurse", "dietitian", "psychologist"]
    staff_members = []

    for member_id in staff_order:
        member_dir = templates_dir / member_id
        if member_dir.exists():
            staff_members.append(load_staff_member(member_dir))

    return staff_members


def prepare_template_context(welcome_text: str, staff_members: list[dict]) -> dict:
    generation_timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return {
        "welcome_text": welcome_text,
        "staff_members": staff_members,
        "generation_timestamp": generation_timestamp,
    }


def render_template(templates_dir: pathlib.Path, context: dict) -> str:
    template_path = templates_dir / "index.html.mako"
    template = mako.template.Template(filename=str(template_path), input_encoding="utf-8")
    return template.render(**context)


def write_output(output: str) -> pathlib.Path:
    output_path = pathlib.Path("docs") / "index.html"

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(output)

    return output_path


def run_precommit_with_retries(max_attempts: int = 3):
    click.echo("\nRunning pre-commit hooks...")
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


@click.command()
def main():
    templates_dir = pathlib.Path("templates")

    welcome_text = read_text_file(templates_dir / "welcome.txt")
    staff_members = load_staff_members(templates_dir)
    context = prepare_template_context(welcome_text, staff_members)
    output = render_template(templates_dir, context)
    output_path = write_output(output)

    click.secho(f"✓ Generated {output_path}", fg="green")
    click.secho(f"  - Loaded {len(staff_members)} staff members", fg="green")

    run_precommit_with_retries()


if __name__ == "__main__":
    main()
