# Missions Fundraiser Template

A modern, customizable website template for missions trip fundraising letters. Built with Bootstrap 5, Font Awesome, and Vite for a fast, professional experience.


## Preview

See this page in action at https://example-prayer-letter.gcgcny.link/#U2FudG9z


## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

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


## Customization

See [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md) for detailed instructions on customizing the template for your mission trip.


## Deployment

### GitHub Pages (Recommended)

This template includes automated deployment to GitHub Pages via GitHub Actions.

1. **Enable GitHub Pages** in your repository settings

2. **Push to main branch** - The GitHub Action will automatically:
   - Install dependencies
   - Build the site
   - Deploy to GitHub Pages


## Personalization Feature

The template includes a URL-based personalization feature. You can send personalized links where "DEAR FRIEND" is replaced with the recipient's name:

```
https://yoursite.com/#Sm9obg==
```

The hash contains a base64-encoded name. Use this online tool or JavaScript to encode names:

```javascript
btoa("John") // Returns: "Sm9obg=="
```
