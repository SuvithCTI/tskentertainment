# 🌟 TSK Entertainments - Luxury Event Planning & Celebrity Management

An animated event planning website for **TSK Entertainments** (founded by Tamil Actor, Vijay TV star, and mimicry artist **Trichy Saravanakumar / Actor TSK**).

> *"We Guarantee You the Applause!"* 👏✨

---

## 🎨 Design & Structure Updates

1. **Lite Colour Background & Luxury Palette:**
   - Switched to an airy, elegant light aesthetic with subtle pearl/ivory tones (`#F8F9FC`), clean white cards, soft borders (`border-slate-200`), and diffused shadows.
   - Dynamic 4-color mood switcher (Royal Amber, Electric Rose, Festive Sunset, Regal Emerald) tailored for light mode.

2. **Concise, Reduced Content:**
   - Streamlined headlines, punchy bullet points, and clean cards with zero unnecessary walls of text.
   - Fast, clear, and high-impact messaging.

3. **Separate Dedicated Pages (via React Router):**
   - **`/` — Home Page:** Hero with dynamic rotator, live stats, 3 top Instagram highlights, budget estimator, and testimonials.
   - **`/about` — About Us:** Actor TSK spotlight, 4 core pillars, and 15-year career timeline.
   - **`/services` — Services & Packages:** Filterable service cards, package breakdown modal, and in-house stagecraft fleet.
   - **`/gallery` — Gallery & Visual Archive:** Filterable event photos, full-resolution lightbox modal, and Instagram reels link.
   - **`/contact` — Contact Us & Booking:** Direct desk cards (WhatsApp, phone, email, IG), instant booking form, and FAQ accordion.

---

## 📁 Clean Folder Structure

```
EVENT PLANNING/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx               # Navigation with active page links & theme switcher
│   │   │   ├── Footer.jsx               # Clean footer with quick links & social icons
│   │   │   ├── SectionHeader.jsx        # Reusable light-mode headers with gradient accents
│   │   │   ├── ParticleBackground.jsx   # Soft floating particle canvas
│   │   │   ├── InstagramIcon.jsx        # Brand SVG glyph
│   │   │   └── FloatingWhatsApp.jsx     # Floating chat button with quick prompts
│   │   ├── home/
│   │   │   ├── HeroSection.jsx          # Punchy hero with headline rotator & CTAs
│   │   │   ├── StatsTicker.jsx          # 850+ events, 150+ celebrities, 15+ years
│   │   │   ├── LiveInstaFeed.jsx        # Real posts from @tskentertainments
│   │   │   ├── CostCalculator.jsx       # Instant interactive budget estimator
│   │   │   └── Testimonials.jsx         # 5-star reviews carousel
│   │   ├── about/
│   │   │   └── AboutSection.jsx         # Actor TSK profile & timeline
│   │   ├── services/
│   │   │   ├── ServicesSection.jsx      # Filterable cards & in-house fleet
│   │   │   └── ServiceDetailModal.jsx   # Package breakdown & WhatsApp booking
│   │   ├── gallery/
│   │   │   ├── GallerySection.jsx       # Category-filtered photo grid
│   │   │   └── LightboxModal.jsx        # Fullscreen photo view
│   │   └── contact/
│   │       ├── ContactSection.jsx       # Contact cards, form & FAQs
│   │       └── BookingModal.jsx         # Quick reservation modal
│   ├── pages/
│   │   ├── HomePage.jsx                 # Separate Home view
│   │   ├── AboutPage.jsx                # Separate About Us view
│   │   ├── ServicesPage.jsx             # Separate Services view
│   │   ├── GalleryPage.jsx              # Separate Gallery view
│   │   └── ContactPage.jsx              # Separate Contact Us view
│   ├── context/
│   │   └── ThemeContext.jsx             # Color mood provider
│   ├── data/
│   │   ├── eventData.js                 # Brand details & themes
│   │   ├── servicesData.js              # Packages & inclusions
│   │   ├── instagramFeedData.js         # Curated @tskentertainments posts
│   │   ├── galleryData.js               # Photos & metadata
│   │   └── testimonialsData.js          # Reviews & FAQs
│   ├── utils/
│   │   └── confetti.js                  # Confetti cannon + applause synthesizer
│   ├── App.jsx                          # Router setup & layout wrapper
│   └── index.css                        # Tailwind v4 styles
```

---

## 🚀 How to Run Locally

```bash
# Start development server
npm run dev

# Build production bundle
npm run build
```
Live server is running at: **`http://localhost:5173/`**.
