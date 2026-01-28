# Bellbrook Vet Demo (GitHub Pages)

This project is now a **static site** designed for GitHub Pages. It recreates the Bellbrook Veterinary Hospital demo site layout without WordPress/Gutenberg, while keeping the Veteos embed scripts intact.

## How to Deploy on GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set the source to the `main` branch and the `/ (root)` folder.
3. If you are using a project site (e.g. `https://username.github.io/repo-name/`), update the `<base href="/">` tag in every HTML file to the repo path (example: `<base href="/repo-name/">`).

## Local Preview

```bash
# From the repo root
python3 -m http.server 8080
```

Then open `http://localhost:8080/bellbrook/` in your browser.

## Site Map

- Home: `/index.html`
- About: `/about/`
- Videos: `/videos/`
- FAQs: `/faqs/`
- Stories: `/stories/`
- Contact: `/contact/`
- Resources hub: `/resources/`
- Resources subpages:
  - `/resources/educational-videos/`
  - `/resources/puppy-kitten-tips/`
  - `/resources/giving-medications/`
  - `/resources/dental-health/`
- Wellness survey: `/wellness-survey/`
- Wellness survey results: `/wellness-survey/results/`
- Privacy policy: `/privacy-policy/`

## Veteos Embeds (Do Not Edit)

- Keep the embed scripts **exactly** as provided.
- You may only wrap them in a container like:

```html
<div class="veteos-embed">
  <!-- Paste Veteos embed script here exactly as provided -->
</div>
```

## Disclaimer Requirement

This demo site must display:

> “This is a demonstration/showcase website created by Veteos.com. Not an official veterinary clinic website. Not medical advice.”

The disclaimer is included on the Home page and in the footer across all pages.
