# Missions Fundraiser Template

A modern, customizable website template for missions trip fundraising letters. Built with Bootstrap 5, Font Awesome, and Vite for a fast, professional experience.

## Features

- ✅ **Modern Stack**: Bootstrap 5.3, Font Awesome 6, Vite build tool
- ✅ **Zero jQuery**: Pure vanilla JavaScript
- ✅ **Fully Responsive**: Mobile-first design that looks great on all devices
- ✅ **Easy Customization**: HTML comments guide you through all customization points
- ✅ **Theme System**: CSS custom properties for easy color customization
- ✅ **Production Ready**: Optimized build process with minification
- ✅ **GitHub Pages Ready**: Automated deployment via GitHub Actions

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) package manager (or npm/yarn)

### Installation

1. **Clone or download this repository**

```bash
git clone https://github.com/yourusername/missions-fundraiser-template.git
cd missions-fundraiser-template
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start development server**

```bash
pnpm dev
```

The site will open automatically at `http://localhost:3000` with hot reload enabled.

### Building for Production

```bash
pnpm build
```

This creates an optimized build in the `dist/` directory ready for deployment.

### Preview Production Build

```bash
pnpm preview
```

## Customization

See [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md) for detailed instructions on customizing the template for your mission trip.

### Quick Customization Checklist

- [ ] Update mission details (country, dates, purpose) in `index.html`
- [ ] Replace placeholder name with your name
- [ ] Update church name and contact information
- [ ] Replace placeholder images in `assets/` directory
- [ ] Customize prayer requests
- [ ] Update giving/donation links
- [ ] Adjust theme colors in `style.scss` (optional)
- [ ] Remove optional sections you don't need

## Project Structure

```
missions-fundraiser-template/
├── index.html              # Main HTML file (customize this!)
├── style.scss              # Styles with CSS custom properties
├── script.js               # Vanilla JavaScript
├── config.json             # Configuration reference (optional)
├── package.json            # Dependencies
├── vite.config.js          # Build configuration
├── assets/                 # Images and graphics
│   ├── README.md           # Asset specifications
│   └── *.svg               # Placeholder images (replace these!)
├── dist/                   # Built files (generated)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## Deployment

### GitHub Pages (Recommended)

This template includes automated deployment to GitHub Pages via GitHub Actions.

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / root

2. **Push to main branch** - The GitHub Action will automatically:
   - Install dependencies
   - Build the site
   - Deploy to GitHub Pages

Your site will be available at: `https://yourusername.github.io/repository-name/`

### Manual Deployment

Build the site and upload the `dist/` directory to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Import project and set build command to `pnpm build`
- **Traditional hosting**: Upload `dist/` contents via FTP

## Personalization Feature

The template includes a URL-based personalization feature. You can send personalized links where "DEAR FRIEND" is replaced with the recipient's name:

```
https://yoursite.com/#Sm9obg==
```

The hash contains a base64-encoded name. Use this online tool or JavaScript to encode names:

```javascript
btoa("John") // Returns: "Sm9obg=="
```

## Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile browsers on iOS and Android
- Internet Explorer is NOT supported (Bootstrap 5 requirement)

## Technologies Used

- [Bootstrap 5.3](https://getbootstrap.com/) - Responsive framework
- [Font Awesome 6](https://fontawesome.com/) - Icon library
- [Vite 6](https://vitejs.dev/) - Build tool
- [Sass](https://sass-lang.com/) - CSS preprocessor

## Contributing

This is a template project. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs or improvements
- Share with your church or missions organization

## License

MIT License - feel free to use this for any missions fundraising purpose!

## Support

For questions or issues:
- Check [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md)
- Open an issue on GitHub
- Refer to [Bootstrap 5 docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## Acknowledgments

Built to support Christian missions fundraising efforts worldwide. May God bless your missions trip!

---

**Ready to customize?** → See [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md)
