# Ahsan Tanweer Portfolio

A personal portfolio built with React and Vite. The site introduces Ahsan's AI and software interests, research project, work in progress, learning roadmap, and contact links.

## Run the site

Install Node.js 20.19 or newer, then open the VS Code terminal in this project folder and run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

## Build for publishing

Create the production site:

```powershell
npm.cmd run build
```

The finished static files are written to `dist/`. Preview that build locally with:

```powershell
npm.cmd run preview
```

## Project map

- `src/main.jsx` - page content, navigation, and interactions.
- `src/styles.css` - colors, layout, responsive styles, and motion.
- `public/images/` - optimized photos used by the website.
- `src/assets/photos-original/` - original uploaded photos kept for future edits.
- `public/resume.html` - resume page with a Print / Save as PDF action.
- `public/favicon.svg` - browser tab icon.

## Update the photos

The hero portrait is `public/images/ahsan-portrait.jpg`. Gallery image names and captions are listed in `src/main.jsx`. Keep the existing filenames when replacing an image, or update the matching path in that file too. The originals are preserved separately under `src/assets/photos-original/`.

## Current limits

- The contact form is intentionally disabled. No email service or backend is connected.
- The resume is a print-ready web page. Open it and choose **Print / Save as PDF** to make a PDF copy.
- Research results, a research document, project repository/demo links, verified AHSAN-E-BAZAR feature details, and a LinkedIn URL have not been provided yet, so the site does not make claims or link to them.

Project and research descriptions should be updated only when verified details are available.
