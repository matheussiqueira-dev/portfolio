from pathlib import Path

root = Path(r"c:/Users/mathe/OneDrive/Documents/portfolio")
exts = {".ts", ".tsx", ".js", ".jsx", ".md", ".json", ".css"}

replacements = [
    ("Ã§", "ç"),
    ("Ã£", "ã"),
    ("Ãµ", "õ"),
    ("Ã¡", "á"),
    ("Ã©", "é"),
    ("Ã­", "í"),
    ("Ã³", "ó"),
    ("Ãº", "ú"),
    ("Ã¢", "â"),
    ("Ãª", "ê"),
    ("Ã´", "ô"),
    ("Ã‰", "É"),
    ("Ã“", "Ó"),
    ("Ã", "Á"),
    ("Ã", "Í"),
    ("Ãš", "Ú"),
    ("Ã‡", "Ç"),
    ("â€”", "—"),
    ("â€“", "–"),
    ("â€\"", "—"),
    ("â€˜", "‘"),
    ("â€™", "’"),
    ("â€œ", "“"),
    ("â€�", "”"),
    ("â€¦", "…"),
    ("Â ", " "),
]

changed_files: list[str] = []

for folder in ["app", "components", "data", "messages", "docs"]:
    base = root / folder
    if not base.exists():
        continue

    for file_path in base.rglob("*"):
        if file_path.suffix.lower() not in exts:
            continue

        try:
            original = file_path.read_text(encoding="utf-8")
        except Exception:
            continue

        updated = original
        for old, new in replacements:
            updated = updated.replace(old, new)

        if updated != original:
            file_path.write_text(updated, encoding="utf-8", newline="\n")
            changed_files.append(str(file_path.relative_to(root)).replace("\\", "/"))

print(f"changed={len(changed_files)}")
for path in changed_files:
    print(path)
