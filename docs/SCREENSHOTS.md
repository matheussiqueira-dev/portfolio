# Screenshots

This document explains how to add and validate media assets for case studies.

## Recommended sizes
- `cover.png`: 1200x630 (OG-friendly)
- `shot-1.png`: 1600x900
- `shot-2.png`: optional, 1600x900
- `demo.gif`: optional
- `demo.mp4`: optional (preferred over GIF)

## Folder structure
```
public/projects/<slug>/
  cover.png
  shot-1.png
  shot-2.png (optional)
  demo.gif (optional)
  demo.mp4 (optional)
```

## Capture tips
- UI projects: capture the main dashboard and a key workflow screen.
- APIs: capture `/docs` (Swagger) and an example response.
- Data projects: capture the dashboard overview and a detail view.

## Compression
- PNG: use TinyPNG or Squoosh for smaller files.
- GIF/MP4: prefer MP4, keep videos under ~5-8 MB when possible.

## Validation
- Local check: `/projects/<slug>/shot-1.png`
- Example: `/projects/self-drive-car/shot-1.png`
