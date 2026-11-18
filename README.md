# customyze.me – Studio-Hub & App-Plattform

Produktionsreifes, statisches Website-Projekt für **GitHub Pages** unter der Custom Domain `customyze.me`. Die Plattform dient als zentraler Studio-Hub, Landingpage-Verzeichnis und Impressum/Datenschutz-Anker für mehrere Web-Apps, die auf Google Cloud / Firebase unter eigenen Subdomains (z. B. `https://[app-slug].customyze.me`) betrieben werden.

---

## 📁 Projektstruktur

```text
customyze/
├── .
├── CNAME                         # Custom Domain Konfiguration für GitHub Pages (customyze.me)
├── robots.txt                    # Erlaubt Crawling, schließt /_templates/ aus
├── sitemap.xml                   # Gültige XML-Sitemap aller Live-Seiten
├── README.md                     # Diese Dokumentation
├── index.html                    # Zentrale Studio-Startseite mit Portfolio & Philosophie
│
├── assets/
│   ├── css/
│   │   └── main.css              # Zentrales CSS-Design-System (Dark-Mode, Tokens, Grids)
│   ├── js/
│   │   └── main.js               # Minimales Vanilla JS (Mobile Nav, Dynamic Year)
│   └── img/
│       └── logo.svg              # Minimalistisches SVG-Vektorlogo
│
├── _templates/
│   └── app-landingpage.html      # Vorlage für neue App-Landingpages
│
├── app-alpha/
│   └── index.html                # Beispiel-Landingpage 1 (DocuFlow)
│
├── app-beta/
│   └── index.html                # Beispiel-Landingpage 2 (MetricPulse)
│
├── impressum/
│   └── index.html                # Zentrales Impressum nach § 5 DDG (mit Platzhaltern)
│
└── datenschutz/
    └── index.html                # DSGVO-Datenschutzerklärung (GitHub Pages, GCP Frankfurt, Payment)
```

---

## 🚀 Neue App-Landingpage hinzufügen (Workflow)

In vier einfachen Schritten legst du eine neue Landingpage an:

### 1. Neuen Ordner anlegen & Template kopieren
Erstelle einen neuen Ordner mit dem gewünschten App-Slug (z. B. `app-gamma`) und kopiere die Vorlage hinein:

```bash
mkdir app-gamma
cp _templates/app-landingpage.html app-gamma/index.html
```

> **Wichtig für saubere URLs:** Durch die Benennung `app-gamma/index.html` liefert GitHub Pages die URL automatisch ohne `.html`-Endung als `https://customyze.me/app-gamma/` aus.

### 2. Platzhalter in `app-gamma/index.html` anpassen
Öffne `app-gamma/index.html` und ersetze folgende Variablen durch deine Texte:

| Platzhalter | Beschreibung | Beispiel |
|---|---|---|
| `[APP_NAME]` | Name deiner App | `CloudCron` |
| `[APP_SLUG]` | Subdomain / Ordnername | `gamma` bzw. `cloudcron` |
| `[APP_TAGLINE]` | Kurzer Slogan | `Zuverlässige Serverless-Cronjobs` |
| `[APP_DESCRIPTION]` | SEO-Meta-Description | `Führe zeitgesteuerte Cloud-Jobs aus...` |
| `[HERO_HEADLINE_MAIN]` | Primäre Überschrift | `Cronjobs ohne Server.` |
| `[HERO_HEADLINE_ACCENT]` | Farbiger Akzenttext | `Präzise im Sekundentakt.` |
| `[FEATURE_1..3]` | 3 USPs im Feature-Grid | Titel & Beschreibung |
| `[STEP_1..3]` | 3-stufiger Ablauf | Workflow für Nutzer |
| `[PRO_PRICE_AMOUNT]` | Preis des Pro-Tarifs | `9` (ergibt 9 € / Monat) |
| `[FAQ_QUESTION / ANSWER]` | App-spezifische FAQs | Antworten auf Vorabfragen |

Der primäre CTA-Button verlinkt automatisch auf deine Cloud-App unter:  
`https://[APP_SLUG].customyze.me`

### 3. In `sitemap.xml` eintragen
Öffne [`sitemap.xml`](file:///c:/DEV/customyze/sitemap.xml) und füge vor dem schließenden `</urlset>` einen neuen `<url>`-Block ein:

```xml
<url>
  <loc>https://customyze.me/app-gamma/</loc>
  <lastmod>2026-11-18</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

### 4. Auf der Startseite (`index.html`) verlinken
Öffne [`index.html`](file:///c:/DEV/customyze/index.html) und ergänze im Grid `<div class="app-grid">` eine neue `<article class="app-card">`-Karte nach dem Vorbild von *App Alpha* bzw. *App Beta*:

```html
<article class="app-card">
  <div class="app-card-top">
    <div class="app-card-icon">
      <!-- SVG Icon -->
    </div>
    <span class="badge badge-accent">DevOps &amp; Cloud</span>
  </div>
  <h3 class="app-card-title">App Gamma · CloudCron</h3>
  <p class="app-card-desc">Kurzbeschreibung deiner neuen App...</p>
  <ul class="app-card-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <div class="app-card-actions">
    <a href="/app-gamma/" class="btn btn-secondary">Landingpage &amp; Details</a>
    <a href="https://gamma.customyze.me" target="_blank" rel="noopener noreferrer" class="btn btn-primary">App starten ↗</a>
  </div>
</article>
```

---

## ⚖️ Rechtliche Platzhalter anpassen

Vergiss nicht, vor dem Go-Live die eckigen Klammern in folgenden zwei Dateien durch deine echten Daten zu ersetzen:

1. [`impressum/index.html`](file:///c:/DEV/customyze/impressum/index.html):
   - `[VORNAME NACHNAME]`
   - `[STRASSE HAUSNUMMER]`
   - `[PLZ ORT]`
   - `[E-MAIL]`
   - `[TELEFON]`
   - `[UST-ID]` (oder Vermerk zur Kleinunternehmerregelung)
2. [`datenschutz/index.html`](file:///c:/DEV/customyze/datenschutz/index.html):
   - Abschnitt 1: Kontaktdaten des Verantwortlichen
   - Abschnitt 4: Genutzten Zahlungsanbieter auswählen (Stripe, Lemon Squeezy oder Paddle)

---

## 💻 Lokale Vorschau

Da das Projekt ohne Build-Step auskommt, kannst du die Seite mit jedem lokalen HTTP-Server testen:

```bash
# Option A: Python 3
python -m http.server 8000

# Option B: Node.js (npx serve)
npx serve .

# Option C: VS Code / IDE
Live Server Extension öffnen
```

Rufe anschließend `http://localhost:8000` im Browser auf.

---

## 🌐 GitHub Pages & DNS-Setup

1. **Repository:** Push des Repositories auf den `main`-Branch bei GitHub.
2. **GitHub Pages aktivieren:**
   - Gehe zu *Repository Settings* → *Pages*.
   - Quelle: *Deploy from a branch*.
   - Branch: `main` / Ordner: `/(root)`.
   - Custom Domain: `customyze.me` (wird durch die Datei `CNAME` automatisch hinterlegt).
   - *Enforce HTTPS* aktivieren.
3. **DNS-Einträge bei deinem Registrar:**
   - **Apex-Domain (`customyze.me`):**  
     A-Records auf die GitHub Pages IP-Adressen:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Subdomains für Cloud-Apps (`alpha.customyze.me`, `beta.customyze.me`, etc.):**  
     CNAME-Records auf deine Google Cloud / Firebase Hosting-Ziele (z. B. `hosting.google.com` oder Firebase CNAME).
