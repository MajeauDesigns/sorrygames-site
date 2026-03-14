# Discord Asset Pack

This folder contains a matched set of editable SVG Discord header assets for the `Sorry. Games` server.

## Files

- `general.svg`
- `devlog.svg`
- `screenshots-clips.svg`
- `roadmap.svg`
- `ideas-feedback.svg`
- `playtest-signups.svg`
- `bug-reports.svg`

If PNG exports are present later, they will use the same file names with `.png`.

## Visual system

The assets follow the current website language:

- dark premium neutrals
- off-white typography
- subtle rounded speech-box panel
- minimal orbit motif with per-channel variation
- restrained red accent only

Core colors used in the SVGs:

- panel fill: `#14181E` to `#0C0F13`
- primary text: `#FFFAF2`
- secondary text: `#B3ACA2`
- tertiary label text: `#8E887F`
- border/line accents: low-opacity white
- red accent: `#E14136`

## How to tweak text

Open any SVG in a code editor or vector app and update the text nodes near the bottom of the file:

- top label: `SORRY. GAMES`
- main title: the channel name
- subtitle: the supporting line
- pill label: `CHANNEL 01` through `CHANNEL 07`

The right-side motif is also editable and is what makes each header slightly distinct while keeping the same family look.

## How to tweak color

Most color values are near the top of each SVG:

- `fill="url(#panel)"` controls the main speech-box fill
- `stroke="url(#line)"` controls the panel outline
- the right-side orbit lines use low-opacity white
- the small red dot uses `fill="#E14136"`

For a more muted look, lower the white stroke opacities a little.

## How to resize

Each asset uses:

- `width="1600"`
- `height="480"`
- `viewBox="0 0 1600 480"`

To resize cleanly, keep the same aspect ratio and change only `width` and `height`, or leave those alone and scale using the `viewBox`.

## Editing notes

- The backgrounds are transparent.
- The SVGs are intentionally simple so they stay editable.
- If you want to add the exact raster logo later, place it carefully and keep red use restrained.
