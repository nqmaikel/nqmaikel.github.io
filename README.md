# Rabbit — The Rabbit Hole (website)

Static marketing site for **Rabbit**: hosted research tools for AI assistants behind one MCP endpoint. Freemium: pick one tool family free forever, or go Pro for all four.

This repository contains **only the static website** (HTML/CSS/JS, no build step, no dependencies, no server code, no keys).
The Rabbit service itself is hosted and closed-source and is not part of this repo.

- Preview locally: `python3 -m http.server 8080` and open http://localhost:8080
- Deploy: GitHub Pages via `.github/workflows/pages.yml`.
- Edit prices, endpoint, tool counts, Whop link: `assets/config.js`.
- Edit the Discord invite: `DISCORD_INVITE` constant at the top of `assets/app.js`.
- Fonts (Geist, Geist Mono, Special Elite) are bundled locally; licenses in `assets/fonts/LICENSES.txt`.
