# Zheng Xiangting Portfolio Website

This is a static editorial portfolio skeleton for Zheng Xiangting, built with plain HTML, CSS, and JavaScript.

## Structure

- `index.html` - Home page
- `about.html` - About page
- `projects.html` - Projects overview page
- `contact.html` - Contact page
- `projects/*.html` - Individual project detail pages
- `assets/js/site.js` - Shared project content and reusable rendering functions
- `assets/css/styles.css` - Full visual system and responsive styles

## Updating Content

Most project text, tags, summaries, outcomes, and visual placeholder labels live in `assets/js/site.js`.

To update a project:

1. Find the project object by its `slug`.
2. Replace the relevant text fields.
3. Update the `visuals` array labels when real screenshots are ready.

## Replacing Visual Placeholders

The current site uses soft editorial placeholder blocks. When real images are available, replace the placeholder markup in `assets/js/site.js` or extend the project data with image paths and update the `renderProjectDetail` and `createProjectCard` functions.

Suggested future image folders:

- `assets/images/projects/soft-bieki-house/`
- `assets/images/projects/guangdong-tv/`
- `assets/images/projects/new-media-internship/`
- `assets/images/projects/italian-tomato-mofusand/`

## Preview

Open `index.html` in a browser to view the site.
