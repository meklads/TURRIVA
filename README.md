# Ruwaq · رواق

Single-page bilingual landing page for **Ruwaq Launch System** — a productized real estate project launch package built on Graphics House's 15-year architectural visualization legacy.

**Live domain:** [ruwaq.co](https://ruwaq.co)

---

## Stack

- Pure HTML / CSS / JavaScript — no build step, no frameworks
- Bilingual: Arabic (RTL) + English (LTR), toggle persists via `localStorage`
- Google Fonts: IBM Plex Sans Arabic, Inter, Cormorant Garamond
- Form backend: [FormSubmit.co](https://formsubmit.co) (no server needed)
- Schema.org + Open Graph metadata
- Mobile-first, fully responsive

---

## Local development

Just open `index.html` in a browser. That's it.

```bash
open index.html        # macOS
```

Or run a tiny local server if you want clean URLs:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deployment workflow

```
GitHub (meklads/ruwaq)  →  Hostinger (Git Auto-Deploy)  →  ruwaq.co (Namecheap DNS)
```

### Step 1 — Push to GitHub

If you're using **GitHub Desktop** (recommended — no token issues):

1. Open GitHub Desktop → **File → Add Local Repository** → select `ruwaq-site`
2. Click **Publish repository**
3. Repository name: `ruwaq` · Owner: `meklads` · uncheck "Keep this code private" (or keep private, your call)
4. Click **Publish Repository**

If you prefer the command line:

```bash
cd ruwaq-site
git remote add origin https://github.com/meklads/ruwaq.git
git branch -M main
git push -u origin main
```

> If you hit a token error, use GitHub Desktop instead — it handles auth via browser OAuth.

### Step 2 — Connect Hostinger to GitHub

1. Log into Hostinger → **Hosting** → your plan → **Advanced → Git**
2. Click **Create repository**
3. Repository address: `https://github.com/meklads/ruwaq.git`
4. Branch: `main`
5. Install path: `public_html` (root of the site)
6. Click **Create**
7. Copy the **Webhook URL** Hostinger gives you
8. Go to GitHub → **meklads/ruwaq → Settings → Webhooks → Add webhook**
9. Paste the URL · Content type: `application/json` · Trigger: `Just the push event`
10. Save

Now every `git push` auto-deploys to Hostinger within seconds.

### Step 3 — Point ruwaq.co to Hostinger

In Hostinger, find your **nameservers** (usually `ns1.dns-parking.com` and `ns2.dns-parking.com`, or similar — check your hPanel).

Then in **Namecheap**:

1. Domain List → `ruwaq.co` → **Manage**
2. **Nameservers** dropdown → switch from "Namecheap BasicDNS" to **Custom DNS**
3. Paste both Hostinger nameservers
4. Save

DNS propagation: 15 minutes to 24 hours.

### Step 4 — Enable HTTPS

In Hostinger → **Security → SSL** → install free Let's Encrypt certificate for `ruwaq.co` and `www.ruwaq.co` → enable **Force HTTPS**.

### Step 5 — Activate the contact form

The form posts to `https://formsubmit.co/hello@ruwaq.co`. The first submission will trigger a confirmation email to that address — click the link to activate. After that, all submissions are forwarded to your inbox.

To change the recipient, edit the `<form action="...">` URL in `index.html`.

---

## File structure

```
ruwaq-site/
├── index.html       # the entire site (HTML + CSS + JS in one file)
├── README.md        # this file
└── .gitignore
```

That's the whole project. Intentionally minimal.

---

## Customization

- **Colors** — defined as CSS variables in `:root` (`--ink`, `--gold`, `--sand`, `--paper`)
- **Pricing tiers** — search for `pricing-card` in `index.html`
- **Contact email** — change `hello@ruwaq.co` in the form action
- **Languages** — Arabic and English content live side-by-side as `<span lang="ar">` and `<span lang="en">`. The JS toggle hides one and shows the other.

---

## Brand notes

- **Ruwaq (رواق)** — Arabic for "portico" / "covered passage between architecture and people"
- **Built on Graphics House** — 15 years, 23+ delivered architectural visualization projects
- **Positioning** — premium project launch system, not a render-by-the-image vendor

---

## License

© 2026 Ruwaq. All rights reserved.
