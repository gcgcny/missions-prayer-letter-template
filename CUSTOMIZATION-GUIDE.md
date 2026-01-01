# Customization Guide

This guide will walk you through customizing the missions fundraiser template for your specific trip.

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Basic Information](#basic-information)
3. [Replacing Images](#replacing-images)
4. [Customizing Colors](#customizing-colors)
5. [Content Sections](#content-sections)
6. [Advanced Customization](#advanced-customization)

## Before You Start

### What You'll Need

- [ ] Your mission trip details (country, dates, purpose)
- [ ] Team photo (1200x800px recommended)
- [ ] Map of your destination (or create one online)
- [ ] Church giving/donation links
- [ ] Your contact information
- [ ] Basic HTML knowledge (helpful but not required)

### Finding Customization Points

All customization points in `index.html` are marked with HTML comments:

```html
<!-- CUSTOMIZE: Description of what to change -->
```

Search for "CUSTOMIZE" in the file to find all editable sections.

## Basic Information

### 1. Page Title and Meta Tags

**Location:** `index.html` lines 7-11

```html
<title>Support Letter for Missions Trip</title>
<meta name="description" content="I'm going on a missions trip...">
<meta name="author" content="Your Name">
```

**Change:**
- Title: Appears in browser tab
- Description: Used by search engines and social media
- Author: Your name

### 2. Mission Destination

**Location:** Throughout `index.html`

Search for "Northlandia" and "Riverdale Province" and replace with your actual destination:

```html
<!-- Example changes: -->
<p>I'm going to <strong>Northlandia</strong> on a missions trip</p>
<!-- Change to: -->
<p>I'm going to <strong>Kenya</strong> on a missions trip</p>
```

### 3. Travel Dates

**Location:** `index.html` line 86

```html
<p>We're leaving on <strong>December 20th</strong>, and arriving back on <strong>January 5th</strong>.</p>
```

Update with your actual departure and return dates.

### 4. Church Information

**Location:** `index.html` line 68

```html
My church, <strong>Community Fellowship Church</strong>, has been partnered...
```

Replace with your church name and partnership details.

### 5. Contact Information

**Location:** `index.html` line 322

```html
(<strong>(555) 123-4567</strong> or <a href="mailto:missionary@example.com">missionary@example.com</a>)
```

Update with YOUR phone number and email.

### 6. Your Name

**Location:** `index.html` line 336

```html
- Much love, [Your Name]
```

Replace `[Your Name]` with your actual name. Also update in other locations (search for "[Your Name]").

## Replacing Images

All images are in the `assets/` directory. See [assets/README.md](assets/README.md) for detailed specifications.

### Required Image Replacements

#### 1. Mission Location Map

**File:** `assets/map-placeholder.svg`

**Options:**
- Create a custom map at [MapChart](https://www.mapchart.net/)
- Use Google My Maps to create and export
- Design in Canva or similar tool

**Size:** 400x400px or larger

#### 2. Travel Dates Graphic

**File:** `assets/dates-placeholder.svg`

Create a simple graphic showing:
- Departure date
- Return date
- Optional: Flight icons or calendar graphics

**Size:** 400x200px

#### 3. Team Photo

**File:** `assets/team-photo-placeholder.svg`

**Requirements:**
- High-quality group photo
- Good lighting, everyone visible
- Landscape orientation (1200x800px recommended)
- Compress to < 500KB using [TinyPNG](https://tinypng.com/)

**Important:** Replace the `.svg` with `.jpg` or `.png` and update the file reference in `index.html` line 130:

```html
<!-- Change from: -->
<img src="./assets/team-photo-placeholder.svg" alt="Team photo">
<!-- To: -->
<img src="./assets/team-photo.jpg" alt="Team photo">
```

#### 4. Statistics Graphic (Optional)

**File:** `assets/statistics-placeholder.svg`

Create a pie chart or infographic showing Christian population percentage for your destination.

**Tools:**
- [Canva](https://www.canva.com/) (free templates)
- [Chart.js](https://www.chartjs.org/) (if you know coding)
- Microsoft PowerPoint or Google Slides

## Customizing Colors & Fonts

All colors and fonts are configured at the **top of `style.scss`** for easy customization!

### Quick Color Change

**Location:** `style.scss` lines 9-13

```scss
// COLOR CONFIGURATION
$primary-color: #FF9933;      // Main accent color (orange by default)
$secondary-color: #138808;    // Secondary accent color (green by default)
$base-color: #42444D;         // Dark gray for headers and backgrounds
```

**Tips:**
- Use your country's flag colors
- Use your church's branding colors
- Use a [color picker tool](https://htmlcolorcodes.com/color-picker/)

### Quick Font Change

**Location:** `style.scss` line 7

```scss
// FONT CONFIGURATION
$font-family: 'Inter', sans-serif;
```

Change to any Google Font (see [Advanced Customization](#changing-fonts) for details).

**After changing colors or fonts:**
1. Save the file
2. If dev server is running, changes apply automatically
3. If not, run `pnpm dev` to see changes

## Content Sections

### Sections You Can Remove

If you don't need certain sections, you can remove them entirely or comment them out.

#### 1. Security Warning

**Location:** `index.html` lines 42-62

If your mission field doesn't require security precautions, delete this entire section:

```html
<!-- OPTIONAL: Security Warning Section - Remove if not needed -->
<div class="row align-content-center box-warning p-5">
  ...
</div>
```

#### 2. Personal Story

**Location:** `index.html` lines 107-132

Replace the example story with your own, or remove this section entirely.

#### 3. Statistics Section

**Location:** `index.html` lines 141-158

If you don't have statistics for your destination, remove or replace with other content.

### Customizing Prayer Requests

**Location:** `index.html` lines 211-275

The template has two columns:
1. "Pray for the Mission Field"
2. "Pray for our team"

**To customize:**
- Change the prayer text in each row
- Add or remove prayer items (copy the entire row structure)
- Change icons (see [Font Awesome icons](https://fontawesome.com/icons))

**Example of adding a prayer item:**

```html
<div class="row align-items-center align-content-center">
  <div class="col my-4">
    Your prayer request text here
  </div>
  <div class="col-auto my-4 px-2 text-center">
    <i class="fas fa-praying-hands icon-pray"></i>
  </div>
</div>
```

### Customizing Activities ("What We'll Be Doing")

**Location:** `index.html` lines 172-191

The template has 3 activity cards. To customize:

1. **Change text** in each `what-card-text` div
2. **Add more cards** by copying the entire card structure
3. **Remove cards** you don't need

## Financial Giving Section

### Update Online Giving

**Location:** `index.html` lines 307-314

```html
<p>Please note <i>"Missions Team - [Your Name]"</i> in the offering notes.</p>
<a href="https://example.com/give" class="btn btn-secondary mt-4" target="_blank">Give securely online</a>
```

**Change:**
1. Replace `[Your Name]` with your actual name
2. Replace `https://example.com/give` with your church's giving URL
3. Update the note instructions to match your church's system

### Update Cheque Instructions

**Location:** `index.html` lines 316-323

```html
<p>Financial contributions are also accepted via cheques made payable to <i>"Your Church Name"</i>.</p>
```

Update:
- Church name for payable line
- Memo instructions
- Your contact info for cheque pickup

### Update Email Signup

**Location:** `index.html` line 284

```html
<a href="https://example.com/signup" target="_blank" class="btn btn-secondary">Sign up for email updates</a>
```

Replace with your email signup link (Mailchimp, church website, etc.)

## Advanced Customization

### Changing Fonts

The template uses Google Fonts (Inter by default) for easy customization.

**To change the font:**

1. **Choose a font** at [Google Fonts](https://fonts.google.com/)
   - Select your font
   - Choose font weights (recommended: 200, 400, 700, 900)
   - Click "Get font" → "Get embed code"

2. **Update `index.html`** (lines 21-23):
   ```html
   <!-- Replace this line: -->
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap" rel="stylesheet">

   <!-- With your new Google Font link, for example: -->
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;700;900&display=swap" rel="stylesheet">
   ```

3. **Update `style.scss`** (line 7):
   ```scss
   // Change from:
   $font-family: 'Inter', sans-serif;

   // To your new font:
   $font-family: 'Roboto', sans-serif;
   ```

**That's it!** The font configuration is centralized at the top of `style.scss` for easy customization.


