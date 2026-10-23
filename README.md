# Rabbit — The Rabbit Hole (website)

Static marketing site for **Rabbit**: free-to-use, hosted research tools for AI assistants behind one MCP endpoint.

This repository contains **only the static website** (HTML/CSS/JS, no build step, no dependencies). The Rabbit service itself is hosted and closed-source and is not part of this repo.

- Preview locally: `python3 -m http.server 8080` and open http://localhost:8080
- Deploy: GitHub Pages (workflow in `.github/workflows/pages.yml`, or Settings → Pages → Deploy from branch `main` / root).
- All asset paths are relative, so the site works at a user root (`<user>.github.io`) or under `/<repo>/`.
