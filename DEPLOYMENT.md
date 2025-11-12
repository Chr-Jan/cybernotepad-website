# Deployment Instructions

## Quick Start

Your HackBytes blog is ready to deploy to GitHub Pages! Follow these steps:

### 1. Create GitHub Repository

\`\`\`bash
cd /workspace/hacker-blog
git init
git add .
git commit -m "Initial commit: HackBytes security blog"
\`\`\`

Create a new repository on GitHub, then:

\`\`\`bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
\`\`\`

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow will automatically deploy on push to main

### 3. Configure Custom Domain

#### Update CNAME File

Edit `public/CNAME` and replace with your domain:
\`\`\`
yourdomain.com
\`\`\`

#### DNS Configuration

**For Apex Domain (example.com):**
Add these A records to your DNS provider:
\`\`\`
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
\`\`\`

**For Subdomain (blog.example.com):**
Add CNAME record:
\`\`\`
CNAME YOUR_USERNAME.github.io
\`\`\`

#### Enable HTTPS

1. In GitHub Settings → Pages
2. Check "Enforce HTTPS"
3. Wait for certificate provisioning (5-10 minutes)

### 4. Update Base Path (If Not Using Custom Domain)

If deploying to `username.github.io/repo-name`, update `vite.config.ts`:

\`\`\`typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
})
\`\`\`

Then rebuild and push:
\`\`\`bash
pnpm build
git add .
git commit -m "Update base path for GitHub Pages"
git push
\`\`\`

## Manual Deployment (Alternative)

If you prefer manual deployment:

\`\`\`bash
pnpm install -g gh-pages
pnpm build
npx gh-pages -d dist
\`\`\`

## Customization

### Add Your Own Blog Posts

Edit `src/data/blogData.ts`:

\`\`\`typescript
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'my-first-post',
    title: 'My First Security Post',
    excerpt: 'Description of the post...',
    content: \`# Markdown content here...\`,
    category: 'Web Security',
    tags: ['security', 'tutorial'],
    date: '2025-11-12',
    readTime: '5 min read',
    author: 'Your Name'
  }
];
\`\`\`

### Update Blog Name and Branding

1. **Navigation**: Edit `src/components/Navigation.tsx`
2. **Hero Section**: Edit `src/pages/HomePage.tsx`
3. **About Page**: Edit `src/pages/AboutPage.tsx`

### Modify Design Tokens

Colors, fonts, and spacing are defined in `tailwind.config.js`.

## Troubleshooting

**404 on routes:** Ensure base path is set correctly in vite.config.ts

**Styles not loading:** Check that GitHub Actions workflow completed successfully

**Custom domain not working:** Verify DNS propagation (can take 24-48 hours)

## Next Steps

1. Commit and push to GitHub
2. Wait for GitHub Actions to deploy (check Actions tab)
3. Configure your custom domain
4. Start adding your own content!

Your blog will be live at:
- **Custom domain:** https://yourdomain.com
- **GitHub Pages:** https://YOUR_USERNAME.github.io/YOUR_REPO_NAME

Enjoy your new security blog!
