# Teaching About AI

This folder contains a [Slidev](https://sli.dev) deck. The presentation source is [`slides.md`](./slides.md).

## First use

Node.js 26.7.0 is selected in `.nvmrc`; Slidev requires Node 22 or newer. Dependencies have already been installed locally.

```bash
cd "AI presentation"
npm run dev -- --open
```

This starts the authoring server and opens the presentation. Edit `slides.md`; the browser updates as you save.

## Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local authoring server |
| `npm run build` | Create a production web version in `dist/` |
| `npm run export` | Export the deck (PDF by default; first run may download a browser) |
| `npm run format` | Format `slides.md` |

## Project structure

| Path | Purpose |
| --- | --- |
| `slides.md` | Slides, front matter, and speaker notes |
| `public/` | Images and other static assets, referenced as `/filename.ext` |
| `.vscode/extensions.json` | Recommended VS Code extensions for Slidev authoring |
| `package.json` | Local Slidev dependency and commands |

Add images, video, or downloadable resources to `public/`. Keep citations and image-attribution details in the relevant slide notes as the deck develops.

The print-friendly key-term handout is [`key-vocabulary.md`](./key-vocabulary.md).

## Offline model comparison

The “Same question, different models” slide does not run models. It has separate placeholders for two selectable questions. Before presenting, paste short responses for each question into [`data/modelResponses.ts`](./data/modelResponses.ts), and record each exact model/version. This keeps the comparison reliable on a laptop without running multiple local models.

The full comparison transcript is kept in [`model-comparison-reference.md`](./model-comparison-reference.md).
