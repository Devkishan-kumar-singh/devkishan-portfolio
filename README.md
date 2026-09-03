# Devkishan Kumar Singh — Portfolio

A modern, responsive portfolio presenting my education, skills, projects, industrial training and technical journey as a Computer Science Engineering student at Silicon University.

## Live links

- Portfolio: [devkishan-portfolio.msoft1298.chatgpt.site](https://devkishan-portfolio.msoft1298.chatgpt.site)
- Featured project: [Synapse](https://synapse.devkishan.site)
- GitHub: [Devkishan-kumar-singh](https://github.com/Devkishan-kumar-singh)
- LinkedIn: [devkishan-kumar-singh](https://www.linkedin.com/in/devkishan-kumar-singh-a30303429/)
- LeetCode: [Devkishan_kumar_singh](https://leetcode.com/u/Devkishan_kumar_singh/)

## Highlights

- Light professional design with navy and cyan accents
- Responsive layout for desktop, tablet and mobile
- Accessible semantic sections and reduced-motion support
- Featured Synapse case study with live and source links
- Education timeline with semester performance
- Skills grouped by practical experience
- AWS industrial training and downloadable credentials
- Downloadable one-page internship résumé
- Direct email, GitHub, LinkedIn and LeetCode contact links
- SEO-ready page title, description and keywords

## Tech stack

- Next.js-compatible Vinext application
- React and TypeScript
- Tailwind CSS 4 plus custom CSS
- Lucide React icons
- Static media and PDF credentials

## Project structure

```text
app/
  globals.css       # Complete design system and responsive styling
  layout.tsx        # Metadata and shared page layout
  page.tsx          # Portfolio content and sections
public/
  assets/           # Profile and Synapse screenshots
  certificates/     # Certificate PDFs
  resume/           # Downloadable internship résumé
  favicon.svg       # DK browser icon
```

## Run locally

Requirements:

- Node.js 22.13 or newer
- npm

Install and start:

```bash
npm run install:ci
npm run dev
```

Open the local address printed in the terminal.

## Production build

```bash
npm run build
```

The build performs TypeScript and production-output validation.

## Customization

- Update personal content, links and section data in `app/page.tsx`.
- Change colors, spacing and responsive behavior in `app/globals.css`.
- Replace images in `public/assets` while keeping the existing filenames, or update their paths in `app/page.tsx`.
- Replace the PDF in `public/resume` whenever the résumé is updated.
- Keep sensitive details such as phone numbers, registration numbers, private email addresses and API keys out of the repository.

## Deployment

The site can be deployed through a platform that supports React/Next-style applications. Before deploying:

1. Run `npm run build` and fix any reported errors.
2. Confirm every external profile and project link.
3. Verify that public documents contain no private information.
4. Update the portfolio URL if you connect a custom domain later.

No environment variables are required for the current portfolio.

## Featured project — Synapse

Synapse is a collaborative prompt-management platform with role-based access, prompt branching and version history, real-time team chat, and Gemini/Groq A/B testing.

- [Live application](https://synapse.devkishan.site)
- [Source repository](https://github.com/Devkishan-kumar-singh/Synapse)

## Contact

For internships and project collaboration, email [kishan394069@gmail.com](mailto:kishan394069@gmail.com).

---

Built by **Devkishan Kumar Singh**.
