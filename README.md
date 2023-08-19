# Description
Portfolio website created with Nextjs 13 and [deployed with Github pages](https://www.youtube.com/watch?v=WoL3xbkAfOU).

# Notes
1. `next.config.js` was changed to allow hosting with Github Pages
    - `output: 'export',` to allow static rendering which Github Pages only supports
    - `images: { unoptimized: true },` to [allow images to display on static sites](https://nextjs.org/docs/messages/export-image-api)

# How to Run
1. Clone repo
2. Run `npm run dev`
3. View at [`localhost:3000/`](localhost:3000/)