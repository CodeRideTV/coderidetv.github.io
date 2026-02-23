# Cooperative Forms

Printable forms for cooperatives: Farmer Application for Cooperative Membership and Annual Development Plan and Budget. Usable by any cooperative (no fixed coop name).

## Project structure (for GitHub Pages)

```
/
├── index.html          # Landing page (links to both forms)
├── style.css           # Styles for landing page
├── README.md
└── membership-form/    # Form pages and their styles
    ├── Form.html       # Farmer Application for Cooperative Membership
    ├── development-plan.html
    └── style.css       # Same styles as root (required so CSS loads on GitHub Pages)
```

**Why `style.css` is in both places:**  
Form pages use `href="style.css"` (same folder) so CSS loads correctly on GitHub Pages. Keep root `style.css` and `membership-form/style.css` in sync when you change styles.

## GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**.
3. Branch: **main** (or your default), folder: **/ (root)**.
4. Site URL: `https://<username>.github.io/<repo-name>/`

The landing page is `index.html`. Farmer Application and Development Plan are under `membership-form/`.

## Local use

Open `index.html` in a browser, or open `membership-form/Form.html` / `membership-form/development-plan.html` directly.
