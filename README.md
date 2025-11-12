# CyberNotepad - Cybersecurity Blog

A professional, modern blog focused on cybersecurity, ethical hacking, and secure development practices. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Dark Mode First** design with professional cybersecurity aesthetic
- **Responsive layout** optimized for all devices
- **Syntax-highlighted code blocks** for technical content
- **Category-based filtering** for easy content discovery
- **Search functionality** for quick article finding
- **Educational content** covering security frameworks and penetration testing
- **Legal disclaimers** for ethical hacking practices

## Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Markdown** - Markdown content rendering
- **Lucide React** - Beautiful icons

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd cybernotepad-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

## GitHub Pages Deployment

### Automatic Deployment (GitHub Actions)

This repository includes automatic GitHub Pages deployment:

1. **Push to main branch** - GitHub Actions will automatically build and deploy
2. **Repository settings** - Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

### Custom Domain Setup (cybernotepad.org)

1. **Create CNAME file** in repository root:
   ```
   cybernotepad.org
   ```

2. **Configure DNS records** with your domain provider:
   ```
   A     185.199.108.153
   A     185.199.109.153
   A     185.199.110.153
   A     185.199.111.153
   ```

3. **Enable HTTPS** in GitHub repository settings under Pages.

## Content Management

### Adding New Blog Posts

Edit `src/data/blogData.ts` to add new articles:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'unique-id',
    slug: 'post-url-slug',
    title: 'Your Article Title',
    excerpt: 'Brief description...',
    content: `Your markdown content here...`,
    category: 'Category',
    tags: ['tag1', 'tag2'],
    date: '2025-11-13',
    readTime: '10 min read',
    author: 'Your Name'
  },
];
```

### Updating Site Information

- **Site title & description**: Edit `index.html` meta tags
- **Navigation links**: Modify `src/components/Navigation.tsx`
- **Contact information**: Update `src/pages/AboutPage.tsx`

## Project Structure

```
cybernotepad-website/
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/               # Static content and blog posts
│   ├── pages/              # Main application pages
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── dist/                   # Built files (generated)
├── .github/workflows/      # GitHub Actions deployment
└── README.md              # This file
```

## Design System

- **Colors**: Professional dark theme with cybersecurity accents
- **Typography**: Inter (body), Space Grotesk (headings), JetBrains Mono (code)
- **Layout**: Mobile-first responsive design
- **Components**: Consistent navigation, cards, and content layouts

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

### Environment Variables

No environment variables required for basic setup.

## Legal & Ethics

This blog promotes **ethical hacking practices** and responsible disclosure. All content is for **educational purposes only**. Users must only test on systems they own or have explicit permission to test.

See `/about` page for complete legal disclaimer.

## Contributing

Contributions are welcome! Please ensure:
- Code follows TypeScript best practices
- Content maintains ethical hacking focus
- Design follows established design system

## License

MIT License - Open source and freely usable.

## Contact

- **Email**: support@cybernotepad.org
- **Website**: https://cybernotepad.org

---

**Built with ❤️ for the cybersecurity community**

*Note: Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` in clone URLs with your actual GitHub information.*
