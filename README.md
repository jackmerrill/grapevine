# Grapevine 🍇

Grapevine is a simple replacement for Linktree.

It uses Astro to compile down to a static site to be hosted anywhere.

## Features

- Analytics with [Shynet](https://github.com/milesmcc/shynet)
- Gets information from Discord for your profile picture and username

## Setup

It's easy to get set up with Grapevine.

1. Clone or download this repository
2. Install dependencies with `yarn/npm/pnpm install`
3. Set up your `.env` file with the following variables:
   - `SHYNET_URL` - The URL to your Shynet instance (optional)
   - `DISCORD_TOKEN` - The token for your Discord bot
   - `DISCORD_ID` - The user ID of the Discord user you want to use
4. Add/modify your links in `src/pages/links`
5. Modify your site url in `astro.config.mjs`
6. Build the site with `yarn/npm/pnpm build`
7. Host the site wherever you want! (Cloudflare Pages, Vercel, Netlify, etc.)
