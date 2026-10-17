# VitalCue public website

A complete, static website for VitalCue. No npm install, API keys, paid hosting, or build step is needed.

## Launch on GitHub Pages (about 5 minutes)

1. Unzip `VitalCue-website.zip` on your computer.
2. On GitHub, create a **public** repository named `vitalcue-website`. Add a README so the repository has a `main` branch.
3. Open **Add file → Upload files**. Upload the contents of the extracted `vitalcue` folder, including the `assets` folder. **`index.html` must be at the repository root**, not inside a second `vitalcue` directory. Commit the upload to `main`.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
5. Wait for the Pages deployment to finish. Return to **Settings → Pages → Visit site**. The address will normally be `https://YOUR-USERNAME.github.io/vitalcue-website/`.

You are uploading the extracted files, not the ZIP itself. If a README upload conflicts with the one GitHub created, omit the local README; it is not needed to display the site. The `.nojekyll` file is included for direct static publishing; if your file picker hides it, the HTML site also works without it under the default Pages processing.

Official setup instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview before publishing

Open `index.html` in a browser. All core pages and assets work locally. For a local server, run `python -m http.server 8000` in this directory, then visit http://localhost:8000.

## Add your public email

Edit `assets/config.js`:

```js
window.VITALCUE_CONFIG = { contactEmail: "YOUR-ACTUAL-PUBLIC-EMAIL" };
```

Use a real address controlled by the team. Without an address, the contact page honestly says contact details are forthcoming. Once an email is set, the inquiry form appears automatically. It opens the visitor's email app with a draft; it does not send email or collect data on a server. Visitors must send the draft themselves. There is also a direct email link.

This optional edit does not block launching the informational website.

## Pages and editing

| File | What to edit |
| --- | --- |
| `index.html` | Homepage story and overview |
| `platform.html` | Signals, modeling framework, development priorities |
| `clinical-focus.html` | Kidney transplant focus and program questions |
| `research.html` | Six referenced papers, evidence type, source links |
| `about.html` | Project history and credited early contributors |
| `contact.html` | Collaboration copy and optional email inquiry |
| `privacy.html` | Website privacy notice |
| `404.html` | Missing-page fallback |
| `assets/styles.css` | Colors, typography, layout, mobile styles |
| `assets/site.js` | Mobile navigation and email draft behavior |
| `assets/config.js` | Public contact email |
| `assets/favicon.svg` | Initial VitalCue brand mark |

Edit HTML text directly and commit changes to GitHub; Pages republishes automatically. Header/footer HTML is repeated across pages to keep the website independent of JavaScript and build tools. Update every page when changing navigation.

## Content decisions

- The user's current kidney transplant/readmission focus takes priority over the older dialysis-centered presentations.
- Product language describes research and development, not a clinically validated service.
- Six publications are attributed as independent research, including explicit preprint/perspective labels.
- The homepage chart is illustrative, contains no patient data, and has no implied numerical model performance.
- Early project contributors and mentors are credited without assigning current corporate titles.
- No institutional endorsements, device partnership logos, commercial deployment metrics, or compliance certifications are asserted.
- The original presentations and full-text PDFs are not included in the public site or this package.
- `docs/CONTENT-NOTES.md` maps source material to website content for the owner.

## Custom domain (optional)

First launch on the default GitHub Pages address. Later configure your domain in **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. No invented domain or CNAME is included.

## What this package does not do

This is a public informational site. It does not ingest wearable data, generate medical predictions, enroll patients, authenticate users, or provide a working clinician dashboard. Those functions require a separate application and appropriate study infrastructure.

## Hosting and privacy

The site has no analytics, cookies, external fonts, or third-party JavaScript. GitHub handles hosting request logs under its own policies. Research links take visitors to external publishers. Review the privacy text when adding analytics, hosted forms, or new services.
