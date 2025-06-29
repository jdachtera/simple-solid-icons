# Demo App Deployment (Netlify)

**Live demo:** [https://your-site-name.netlify.app](https://your-site-name.netlify.app)

This demo app is ready to deploy on Netlify.

- **Netlify config:** [`netlify.toml`](./netlify.toml)
- **Project root:** This `demo/` folder
- **Build command:** `pnpm install --frozen-lockfile && pnpm run build`
- **Publish directory:** `dist`

## Quick Deploy

1. Push your code to GitHub.
2. Go to [Netlify New Site](https://app.netlify.com/start) and connect your repo.
3. Set the site root to the `demo/` folder if prompted.
4. Netlify will auto-detect the config and deploy your app.

## Metro File

For more info on Netlify's build system and configuration, see the official docs:

- [Netlify Configuration ("metro" file)](https://docs.netlify.com/configure-builds/file-based-configuration/)
