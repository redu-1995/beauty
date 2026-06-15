# YV. Beauty — Premium Cosmetics & Skincare E-Commerce

YV. Beauty is a highly optimized, premium Single Page Application (SPA) built for a luxury cosmetics and skincare boutique based in Addis Ababa, Ethiopia. The platform features an elegant, editorial design system crafted to showcase high-end products across skincare, makeup, fragrances, and haircare collections.

Rather than utilizing a traditional complex checkout cart, the platform implements a high-converting **Direct Social Checkout Strategy**, routing buying customers instantly to personal conversational channels via Telegram and WhatsApp for local delivery logistics.

**🚀 Live Demo:** [yvbeauty.netlify.app](yvbeauty.netlify.app/)

---

## ✨ Features

* **Luxury UI/UX Design System:** Elegant editorial layout featuring an ultra-premium color palette, responsive glassmorphic fixed navigation elements, smooth micro-interactions, and expanding underline hover configurations.
* **Granular Product Discovery Matrix:** Fully responsive grid architectures paired with targeted filtering tags allowing customers to isolate products by skin types, specific concerns, or fragrance families.
* **Responsive Layout Design:** Mobile-first architecture built natively with Tailwind CSS utilities to provide a high-end application feeling on phones, tablets, and desktop setups.
* **Direct Social Checkout Integration:** Call-to-action hooks structured across product cards enabling instant purchasing communication pathways straight to WhatsApp and Telegram handle gateways.
* **Robust Router Architecture:** Zero-latency layout switching powered by `react-router-dom` with localized production fallback maps for strict case-sensitive hosting infrastructure.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** React 18 (JavaScript)
* **Build Tool:** Vite (Optimized for ultra-fast Hot Module Replacement)
* **Styling Engine:** Tailwind CSS
* **Routing Mesh:** React Router DOM (Single Page Application architecture)
* **Slider Animations:** Embla Carousel (with customized autoplay plug-ins)
* **Hosting Pipeline:** Netlify (with production caching overrides via strict `_redirects` rules)

---

## 📂 Project Directory Structure

```text
beauty/
├── public/
│   ├── _redirects            # Netlify SPA routing rules file
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/           # Curated collection product images & logos
│   ├── components/
│   │   ├── layout/           # Shared UI wrappers (Navbar, Footer)
│   │   └── Modules/          # Feature-specific components (skincare, perfume, makeup)
│   ├── pages/                # Route components (Home, Skincare, Makeup, Perfume, etc.)
│   ├── App.jsx               # Main router configurations mapping route views
│   ├── index.css             # Base Tailwind style declarations
│   └── main.jsx              # React application entry node mounting script
├── package.json
├── tailwind.config.js
└── vite.config.js

```

---

## 🚀 Getting Started (Local Development)

Follow these simple instructions to download and run the project locally on your machine for customization or testing.

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### Installation Steps

1. **Clone the Repository:**
```bash
git clone https://github.com/redu-1995/beauty.git
cd beauty

```


2. **Install Project Dependencies:**
```bash
npm install

```


3. **Launch the Local Development Server:**
```bash
npm run dev

```


*Open your web browser and navigate to the address shown in your terminal (usually `http://localhost:5173`).*
4. **Verify the Production Build Configuration:**
To test how the system compiles and performs production bundle optimizations locally before pushing updates to your repository, run:
```bash
npm run build

```



---

## 🌐 Production Deployment Considerations

This repository is optimized for out-of-the-box continuous deployment workflows with **Netlify**.

### Important Development Configurations Kept in Track:

* **Strict Case-Sensitivity Rules:** To guarantee successful compilations under Linux environment servers, all module files reside inside a capitalized folder structure path (`src/components/Modules/...`) and are explicitly imported using their respective `.jsx` file extensions.
* **SPA Route Redirects Flag:** To prevent browser actions from producing unexpected `404 Not Found` messages upon hitting standard page refreshes on internal links, a custom production file is packaged in the public root folder (`public/_redirects`) redirecting traffic cleanly back to our core engine.

---

## 📄 License

This software project is initialized and managed as an open source resource. All rights reserved.
