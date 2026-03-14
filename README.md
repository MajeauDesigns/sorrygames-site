# Sorry. Games static site

First full static version of the `Sorry. Games` one-page studio website, built with plain HTML, CSS, and a small amount of JavaScript.

## Files

- `index.html` contains the page structure and editable text content.
- `styles.css` contains the visual system, layout, colors, and responsive behavior.
- `script.js` contains the subtle header and reveal interactions.
- `Logo/SG_Transparent_Logo.png` is the current logo used in the header and hero.

## How to edit text

Open `index.html` and update the visible copy inside each section:

- Hero: tagline, CTA labels, and studio highlights
- About: studio blurb
- Featured Project: project title, pitch, and metadata tags
- Community: Discord/community description
- Content Grid: devlog, roadmap, feedback, playtest, and bug report copy
- Footer: email, social labels, and copyright text

Search for these section comments to move quickly:

- `<!-- Hero Section -->`
- `<!-- About Section -->`
- `<!-- Featured Project Section -->`
- `<!-- Community Section -->`
- `<!-- Content Grid Section -->`
- `<!-- Footer -->`

## How to replace images

### Logo

The current logo is referenced in `index.html` at:

- `Logo/SG_Transparent_Logo.png`

To replace it:

1. Add your new logo file to the `Logo` folder.
2. Update the `src` values on the two logo `<img>` tags in `index.html`.

### Screenshot placeholders

The screenshot area currently uses styled placeholder blocks instead of real images. In `index.html`, find:

- `<div class="shot-block" ...>Shot 01</div>`
- `<div class="shot-block" ...>Shot 02</div>`
- `<div class="shot-block" ...>Clip 03</div>`

Replace each block with an image element if you want real media:

```html
<img class="shot-block" src="images/screenshot-01.jpg" alt="Short description of the screenshot">
```

`styles.css` already includes support for using `.shot-block` on real images.

### Featured project art

The featured project section uses a placeholder panel with the text `Replace with a screenshot, trailer still, poster image, or cinematic crop.`

You can swap the `.project-surface` block for:

- a real `<img>`
- a linked trailer thumbnail
- a poster-style cover image

## How to change links

Open `index.html` and update the placeholder `href` values:

- Discord invite: `https://discord.gg/qrg4fF2F`
- Social links in the footer: currently routed through `https://sorrygames.com/...`
- Project / devlog / roadmap / feedback / playtest / bug links: currently routed through `https://sorrygames.com/...`
- Contact email: `mailto:hello@sorrygames.com`

## How to change colors and spacing

Open `styles.css` and edit the CSS variables in the `:root` block near the top.

Useful variables:

- `--bg`, `--bg-deep`, `--bg-soft`
- `--text`, `--text-strong`, `--text-muted`
- `--line`, `--line-strong`
- `--radius`
- `--space-1` through `--space-9`

## How to deploy to Cloudflare Pages

This site is static, so Cloudflare Pages deployment is simple:

1. Push this folder to a Git repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Use these build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `.`
4. Deploy.

Because the site is plain static HTML/CSS/JS, Cloudflare Pages can serve it directly without a build step.
