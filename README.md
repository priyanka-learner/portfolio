# Priyanka Awachar — Personal Portfolio Website

> **WeIntern Pvt Ltd · Web Development Internship · Week 1 · Task 1**

---

## Objective

A professional, fully responsive personal portfolio website that presents my
profile, technical skills, projects, resume and contact information to
potential employers and collaborators.

The site is built using only core web technologies — **HTML5, CSS3 and
JavaScript** — with no external UI frameworks, demonstrating fundamental
frontend development ability as required by the Week 1 Task 1 guidelines.

---

## Live Demo

> 🔗 **[Add your GitHub Pages / Netlify / Vercel deployment link here]**

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, layout (Flexbox + Grid), responsive design, animations |
| JavaScript (ES6+) | Interactivity — nav, skills panel, accordion, form validation |
| Google Fonts (Poppins) | Typography |
| Font Awesome 6 | Icons |

---

## Features

- **Responsive layout** — works on desktop, tablet and mobile (4 breakpoints)
- **Sticky navigation** with scroll-activated shadow and active section highlight
- **Mobile hamburger menu** with Escape-key and outside-click close
- **Hero section** with profile image, role, description and 3 CTA buttons
- **About section** with education cards and professional bio
- **Interactive skills section** — click any skill card to see its detail panel
- **Projects section** — expandable accordion cards with key features list
- **Contact section** — contact info panel + form with inline JS validation
- **Form success message** — friendly green banner (no `alert()`) with auto-reset
- **Resume download** button linking to `assets/resume/Resume Priyanka.pdf`
- **Footer** with navigation links, social icons and dynamic copyright year
- **Accessibility** — semantic HTML5, ARIA labels, visible focus states, `alt` text
- **Smooth scrolling** via `scroll-behavior: smooth`
- **Subtle animations** — hover lifts, slide-down accordion, pulsing badge

---

## Folder Structure

```
Portfolio/
│
├── index.html                  ← Single-page portfolio
├── README.md                   ← This file
│
├── css/
│   └── style.css               ← All styles (design tokens, layout, responsive)
│
├── js/
│   └── script.js               ← All interactivity (8 IIFE modules)
│
├── assets/
│   ├── images/
│   │   └── profile.jpeg        ← Profile photograph
│   └── resume/
│       └── Resume Priyanka.pdf ← Downloadable resume
│
└── screenshots/
    ├── portfolio-home-desktop.png   ← Add after taking screenshots
    ├── portfolio-home-mobile.png
    ├── portfolio-projects.png
    └── portfolio-contact.png
```

---

## How to Run Locally

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   ```
2. Open the project folder in your file explorer or code editor.
3. Double-click **`index.html`** to open it directly in your browser.

> No build tools, package managers or servers are required.
> The site runs entirely from static files.

**Optional — VS Code Live Server:**
- Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- Right-click `index.html` → **Open with Live Server**.

---

## Screenshots

> Add screenshots after taking them and place them in `screenshots/`.

### Home — Desktop
![Home desktop view](screenshots/portfolio-home-desktop.png)

### Home — Mobile
![Home mobile view](screenshots/portfolio-home-mobile.png)

### Projects Section
![Projects section](screenshots/portfolio-projects.png)

### Contact Section
![Contact section](screenshots/portfolio-contact.png)

---

## Pages / Sections

| Section | Description |
|---|---|
| **Home / Hero** | Name, role, intro, profile image, CTA buttons, social links |
| **About** | Education, focus areas, bio, resume download |
| **Skills** | 9 skill cards with interactive detail panel |
| **Projects** | 3 project cards with expandable details accordion |
| **Contact** | Contact info, availability badge, validated contact form |
| **Footer** | Nav links, social icons, copyright |

---

## Placeholders to Update

Before final submission, replace the following items with your actual information:

| Item | Location | What to change |
|---|---|---|
| GitHub URL | `index.html` hero socials, contact section, footer | Replace `https://github.com/` with your profile URL |
| LinkedIn URL | `index.html` hero socials, contact section, footer | Replace `https://www.linkedin.com/` with your profile URL |
| Deployment link | This README, Live Demo section | Add GitHub Pages / Netlify / Vercel URL |
| Project GitHub links | `index.html` project detail panels | Add `<a>` links to each project repo |
| Screenshots | `screenshots/` folder | Add actual PNG screenshots |

---

## Accessibility Notes

- All images have descriptive `alt` attributes
- All buttons use `aria-label`, `aria-expanded` and `aria-pressed` where appropriate
- Form fields have associated `<label>` elements
- Focus states are visible for keyboard navigation
- Colour contrast meets WCAG AA guidelines for body text

> Full WCAG compliance requires manual testing with assistive technologies.

---

## Author

**Priyanka Awachar**  
B.Tech Computer Science & Engineering  
Raipur Institute of Technology (2023–2027)  
📧 priyankaawa4@gmail.com  
📞 +91 8889847156

---

## Submission Checklist (Week 1 — Task 1)

- [x] Home / Hero section
- [x] About section with education
- [x] Skills section with interactive detail panel
- [x] Projects section with expandable cards
- [x] Contact section with form and validation
- [x] Footer with navigation and social links
- [x] Resume download button
- [x] Responsive layout (desktop / tablet / mobile)
- [x] Semantic HTML5 structure
- [x] CSS Flexbox and Grid used
- [x] JavaScript interactivity (no frameworks)
- [x] Accessibility basics implemented
- [x] Clean folder structure
- [x] README documentation
- [ ] Live deployment link ← *add before submitting*
- [ ] Screenshots added ← *add before submitting*
- [ ] GitHub / LinkedIn URLs updated ← *add before submitting*
