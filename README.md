# Meralus.com Portfolio
 Home page for Tedley Meralus


## Features

- TypeScript
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- A contact form protected by Google Recaptcha powered by Formspree
- Can be deployed with one click
- Fetches your Github pinned projects with most stars (You could customize this if you wish) using ISR
- One click deployment to Vercel


### Locally

1. Create an account at [Formspree](https://formspree.io/?utm_source=smakosh)
2. Install [Pnpm](https://pnpm.io/)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=public_repo&description=portfolio-dev)
4. Run `cp .env.development.local.template .env.development.local`
   > If you'd like to build the website locally, you will need to run `cp .env.development.local.template .env.development.local` as well and provide your env variables.
5. Run `pnpm i && pnpm dev`

   > You could run `vercel env pull` to get your env variables from Vercel.

6. Make sure to edit the `src/data/config.ts` file

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

## Built with

- Adobe XD
- Next js
- Tailwindcss
- TypeScript
- Formspree
- VSCode
- And these useful of JavaScript libraries [package.json](package.json)

## Developed by 

[Gatsby-portfolio-portfolio](https://github.com/smakosh/gatsby-portfolio-dev)
 
## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)
 
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details
 
## Support

If you love this Next js template and want to support development of the template, you can do so through the developers GitHub profile.
