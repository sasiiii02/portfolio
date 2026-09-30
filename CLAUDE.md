# Portfolio v2

Personal portfolio for Sasanka Karunarathna, a 4th-year Software Engineering undergraduate at SLIIT and Software Engineer intern at TS Technologies. Goal: get interviews for software engineering / front-end roles.

## Stack

- Astro (latest) + TypeScript (strict)
- Tailwind CSS v4 (via the Vite plugin)
- Bun for package management and scripts
- React only for genuinely interactive islands
- Motion (Framer Motion) sparingly, for animation only

## Rules

- Content lives in Astro content collections (Markdown/MDX + JSON), never hardcoded in components: projects, experience, certificates.
- Mobile-first, accessible: semantic HTML, alt text, keyboard focus, sufficient contrast. Respect `prefers-reduced-motion`.
- Support dark and light mode; dark by default.
- Target Lighthouse 95+ on all four categories. Optimize images with Astro's image tools.
- No generic template look: one accent color, strong typography, real spacing. Avoid emoji in the UI.
- Small components, one job each.
- Run `bun run build` and fix errors before finishing any task.
- Never run `git commit`, `git push`, or any command that changes git history. The user makes all commits themself. When a step is done, state what changed and suggest a commit message.
