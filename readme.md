# Bellbrook Vet Demo (GitHub Pages)

This project is now a **static site** designed for GitHub Pages. It recreates the Bellbrook Veterinary Hospital demo site layout without WordPress/Gutenberg, while keeping the Veteos embed scripts intact.

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
