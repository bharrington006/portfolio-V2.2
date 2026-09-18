# Portfolio V2

Static portfolio site — plain HTML, CSS and a few lines of JavaScript. No build step.

## Structure

```
index.html                  the page
css/style.css               design-system tokens + component classes (colors, type scale,
                            spacing, buttons, cards, nav, tables…) and the self-hosted
                            @font-face rules — the source of truth for the look
css/portfolio.css           page layout and components for index.html, built on the tokens
js/main.js                  expand/collapse for the per-project "design story" panels
fonts/                      Barlow / Barlow Condensed (woff2)
assets/favicon.png          tab icon
assets/apple-touch-icon.png iOS home-screen icon
assets/images/              headshot.webp, placeholder-jackmac.jpg
assets/video/               comp-cover-v3.mp4 (SO-101 policy demo)
```

## Placeholders to replace

`assets/images/placeholder-jackmac.jpg` currently fills every image slot that
was empty in the design. Swap the `src` on each `<img>` in `index.html`:

| Section | Slots |
| --- | --- |
| 01 · SO-101 — design story | two 4:3 process shots |
| 03 · Rover Science Module | the CAD hero (wears `.media-frame--duotone`, the system's accent wash — drop that class to show the image in natural color) |
| 03 · Rover Science Module — design story | two 4:3 CAD / assembly views |
| Odds and Ends | three square tiles |

Also still to fill in: the SO-101 and Rover blurbs, and the Contact / Resume cards.

## Editing

- Colors, fonts and spacing come from the `:root` tokens at the top of
  `css/style.css`. Retune the look there rather than hard-coding values.
- Page-specific classes live in `css/portfolio.css`, grouped by section.
  Frames that hold an image or video use `.media-frame` plus an aspect
  modifier (`--portrait`, `--4x3`, `--square`, …).
- Each project `<section class="project">` owns one `.story` panel and one
  `[data-story-toggle]` button; `js/main.js` wires them up. To have a story
  open on page load, add `is-open` to the section and remove `hidden` from
  its `.story`.

## Preview locally

```bash
npx serve .
```

or

```bash
python3 -m http.server
```

then open the printed URL in a browser.

## Deploying

Push the folder as-is to GitHub Pages, Netlify, Vercel or any static host.
