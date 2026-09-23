# Roblox Build Day

A responsive promotional website built with plain HTML, CSS, and JavaScript. No frameworks or build step required.

- **For kids:** playful introduction to making a Roblox game.
- **Schools & parents:** creativity, problem-solving, supervision, and a downloadable planning checklist.
- **Event:** October 1, 2026, all day, online. Unconfirmed registration and timing details are labeled on the site.

## Run locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. The schools and parents page is at `/schools/`.

## Files

- `index.html`, `style.css`, `app.js`: kids' page
- `schools/`: schools and parents page, print action, and planning checklist
- `assets/build-world.png`: AI-generated illustration
- `favicon.svg`: site icon

The kids' page loads fonts from Google Fonts with local fallbacks. All artwork is included locally.

## Hosting

Serve the repository root with any static website host. For GitHub Pages, choose the `main` branch and `/ (root)` directory in the repository's Pages settings.
