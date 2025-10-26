# Kai Li's Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring a sleek design with dark/light mode toggle and smooth animations.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Kai+Li+Portfolio)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 🌓 **Dark/Light Mode**: Seamless theme switching with system preference detection
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Performance**: Optimized with Next.js 15 and static generation
- 🎯 **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- 🎭 **Smooth Animations**: Intersection Observer-based scroll animations
- 🎨 **Custom Theme**: Carefully crafted color scheme with CSS variables

## 🚀 Tech Stack

### Core Framework

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Modern icon library
- **React Icons** - Additional icon sets

### Theme & Animations

- **next-themes** - Theme management
- **tw-animate-css** - Tailwind animation utilities
- **react-hot-toast** - Toast notifications

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **class-variance-authority** - Component variant management

## 📁 Project Structure

```
dev-portfolio-v1/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Home page
│   ├── robots.ts         # SEO robots.txt
│   └── sitemap.ts        # SEO sitemap
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   ├── mode-toggle.tsx   # Theme toggle component
│   ├── mobile-menu.tsx   # Mobile navigation
│   └── web-menu.tsx      # Desktop navigation
├── pages/                # Page components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   └── skills.tsx        # Skills section
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎨 Design System

### Color Palette

- **Primary**: Green gradient (#10b981 to #059669)
- **Secondary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Accent**: Purple gradient (#8b5cf6 to #7c3aed)
- **Neutral**: Gray scale with proper contrast ratios

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable text with proper line heights

### Components

- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Icons**: Consistent sizing and spacing
- **Animations**: Smooth transitions and scroll-triggered effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/dev-portfolio-v1.git
   cd dev-portfolio-v1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`pages/hero.tsx`)

   - Name, title, description
   - Social media links
   - Profile image path

2. **About Section** (`pages/about.tsx`)

   - Personal description
   - Experience details
   - Skills and technologies

3. **Projects Section** (`pages/projects.tsx`)

   - Project details
   - Live demo links
   - GitHub repositories

4. **Contact Section** (`pages/contact.tsx`)

   - Email address
   - Resume download link
   - Social media links

5. **Metadata** (`app/layout.tsx`)
   - Site title and description
   - OpenGraph and Twitter meta tags

### Styling

- **Colors**: Update CSS variables in `app/globals.css`
- **Fonts**: Change font imports in `app/layout.tsx`
- **Components**: Modify component styles in respective files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Theme System

The portfolio supports both light and dark themes:

- **System Preference**: Automatically detects user's system theme
- **Manual Toggle**: Users can manually switch themes
- **Persistent**: Theme preference is saved in localStorage

## ⚡ Performance Features

- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting for optimal loading
- **Font Optimization**: Google Fonts are optimized for performance

## 🔍 SEO Features

- **Meta Tags**: Complete meta tag implementation
- **OpenGraph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper HTML structure for accessibility

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy with AWS
- **Railway**: Simple deployment platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/dev-portfolio-v1/issues).

## 📞 Contact

**Kai Li** - Full Stack Developer

- Email: [test-demo@gmail.com](mailto:test-demo@gmail.com)
- GitHub: [@kaili](https://github.com/kaili)
- LinkedIn: [@kaili](https://linkedin.com/in/kaili)
- Twitter: [@kai_li](https://twitter.com/kai_li)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ **Star this repository if you found it helpful!**
