# Jungyeon Kim – personal website

A plain HTML site for GitHub Pages. No build step and nothing to install.

## Put it online

1. Sign in at github.com and create a **new repository** named exactly `YOUR-USERNAME.github.io`
   (replace `YOUR-USERNAME` with your GitHub username). Set it to **Public**.
2. On the new repository page choose **uploading an existing file**, drag in everything from this
   folder (including the `assets` folder), and press **Commit changes**.
3. Wait a minute or two, then open `https://YOUR-USERNAME.github.io`.

If the page does not appear, open the repository's **Settings → Pages** and check that the source is
"Deploy from a branch", branch `main`, folder `/ (root)`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page: about, research, news, education, experience, selected publications |
| `publications.html` | Full publication list |
| `cv.html` | CV page (prints cleanly: use the browser's Print → Save as PDF) |
| `site.js` | **Your photo, profile links and publication list. Most updates happen here.** |
| `style.css` | Colours, fonts and layout |
| `assets/` | Put your photo, logos and any paper figures here |

## Common updates

**Change your photo.** Replace `assets/profile.jpg` with a new file of the same name (portrait shape,
about 800 × 960 px looks sharpest). The path is set as `photo` at the top of `site.js`.

**Change or add a logo.** Logos live in `assets/logos/` as `samsung`, `globalfoundries`, `hyundai` and
`ntu` (`.svg`, `.png` or `.jpg`). Replace a file to change a logo. For a new organisation, copy an
existing entry in `index.html` or `cv.html` and change the name in `data-logo="assets/logos/..."`.

**Add GitHub, Google Scholar, LinkedIn or ORCID links.** Paste the addresses into `PROFILE.links`
at the top of `site.js`. Empty ones are not shown.

**Add a paper.** Copy one entry in `PUBLICATIONS` in `site.js`, put it at the top of its type and
edit the fields. It appears on the Publications page and the CV page; add `selected: true` to show it
on the home page too. Numbering (J1, J2 … / C1, C2 …) updates by itself. A paper can also have a
figure (`image: "assets/figure.jpg"`) and extra links (`links: { pdf: "...", code: "...", video: "..." }`).

**Add a news item, award or job.** Edit the matching list in `index.html` or `cv.html`: copy one
`<li>…</li>` block and change the text.

**Change the bio or research text.** Edit the paragraphs in `index.html`.

## Notes

- Your phone number from the CV is deliberately left off the site.
- The two undergraduate papers are listed without author lists because the CV does not give them;
  add `authors: "..."` to those entries in `site.js` if you want them shown.
