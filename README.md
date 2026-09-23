# ShieldProbe Website

Official website for **ShieldProbe** – Penetration Testing & Vulnerability Assessment for Namibian Businesses.

Live site (after deploy): `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## Deploy on GitHub Pages

### Option A – New repository (recommended)

1. Create a new repository on GitHub (e.g. `shieldprobe` or `shieldprobe.na`).
2. Upload **all files in this folder** to the **root** of the repository (do not put them inside another subfolder).
3. Go to **Settings → Pages**.
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**.
6. Wait 1–2 minutes, then visit:  
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Option B – Command line

```bash
# From this folder
git init
git add .
git commit -m "Initial ShieldProbe website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Then enable GitHub Pages as in step 3–5 above.

### Option C – User/Organization site

If you want the site at `https://YOUR-USERNAME.github.io/`:

1. Name the repository exactly `YOUR-USERNAME.github.io`
2. Push these files to the `main` branch root
3. Pages will be enabled automatically

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main page |
| `styles.css` | Styles |
| `script.js` | Interactivity |
| `logo.png` | Brand logo + favicon |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll |

All asset paths are relative, so the site works on GitHub Pages without changes.

---

## Local preview

```bash
# Python
python3 -m http.server 8080

# or Node
npx serve .
```

Open http://localhost:8080
