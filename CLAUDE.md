# PUNKU.AI Website - Claude Development Guide

## Project Overview
This is the marketing/landing website for PUNKU.AI, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Quick Start

### Running the Application
```bash
npm run dev      # Development server (with Turbopack)
npm run build    # Production build (with Turbopack)
npm start        # Production server
npm run lint     # Run ESLint
```

Access at: http://localhost:3000

## Claude-Specific Permissions & Capabilities

### File Operations
- **Full Access**: View, edit, and create files throughout the codebase
- **Edit Tools**: Use Edit, Write tools as needed
- **Code Generation**: Generate and modify TypeScript, React components, and styles
- **File Management**: Create, move, and organize files and directories

### Development Operations
- **Git Operations**: Help with git tasks (status, add, commit, PR creation)
- **Command Execution**: Run npm commands and safe development commands
- **Testing**: Execute lint checks and type checking
- **Build Process**: Build and run development/production servers

### Code Quality Requirements
- **Linting**: Run `npm run lint` after changes
- **TypeScript**: Strict TypeScript compliance
- **Formatting**: Follow project's ESLint configuration
- **Components**: Use Next.js 15 App Router conventions
- **Styling**: Use Tailwind CSS v4 with proper class naming

## Technology Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack (enabled)
- **Linter**: ESLint with Next.js config

## Project Structure

```
punku-ai-website/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       └── page.tsx        # Home page
├── public/                 # Static assets
├── CLAUDE.md              # This file
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## Development Guidelines

### Component Development
- Use TypeScript for all components
- Follow Next.js 15 App Router patterns (Server Components by default)
- Use `"use client"` directive only when needed (interactivity, hooks, etc.)
- Implement proper TypeScript types/interfaces
- Use semantic HTML and accessibility best practices

### Styling Standards
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use theme-aware styles (light/dark mode support)
- Leverage Tailwind's modern v4 features

### Code Style Requirements
- **TypeScript**: Strict mode enabled
- **React**: Functional components with hooks
- **Imports**: Organized and properly typed
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Files**: kebab-case for file names (e.g., `my-component.tsx`)

### Best Practices
1. **Server Components First**: Use Server Components unless client-side features are needed
2. **Image Optimization**: Use Next.js `<Image>` component
3. **Metadata**: Define proper metadata for SEO
4. **Performance**: Optimize bundle size and loading performance
5. **Accessibility**: Follow WCAG guidelines

## Development Workflow

### Code Changes Process
1. **Analysis**: Understand existing component patterns
2. **Implementation**: Follow Next.js and React best practices
3. **Testing**: Run lint and type checking
4. **Validation**: Test in development mode
5. **Build**: Ensure production build succeeds

### Quality Checks
```bash
npm run lint                 # ESLint check
npx tsc --noEmit            # TypeScript check (no emit)
npm run build               # Production build test
```

## Common Tasks

### Creating New Pages
1. Add new route in `src/app/[route]/page.tsx`
2. Implement Server Component by default
3. Add metadata export for SEO
4. Style with Tailwind CSS

### Creating Components
1. Create in appropriate directory (e.g., `src/components/`)
2. Use TypeScript with proper props interface
3. Follow existing patterns in codebase
4. Export as named or default based on usage

### Adding Assets
- Place in `public/` directory
- Reference with `/filename.ext` in code
- Use Next.js Image component for images
- Optimize images before adding

## Git Workflow

### Commit Standards
- Use semantic commit messages
- Formats: `feat:`, `fix:`, `style:`, `refactor:`, `docs:`
- Keep commits focused and descriptive
- Never commit secrets or API keys

### Branch Strategy
- Work on feature branches
- Merge to main when ready
- Keep main branch deployable

## Deployment Notes

- Optimized for Vercel deployment
- Turbopack enabled for faster builds
- Environment variables via `.env.local` (not committed)
- Production builds use Next.js optimizations

## Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Project Purpose**: Marketing website for PUNKU.AI - showcasing the AI-powered Langflow platform and its capabilities.
