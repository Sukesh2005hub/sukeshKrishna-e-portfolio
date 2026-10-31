# SUKESHKRISHNA E — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack Java, React, and AI applications.

**Live site:** [https://YOUR-SITE-URL/](https://YOUR-SITE-URL/)

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

---

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **AOS (Animate On Scroll)**
- **EmailJS**
- **WebGL (SplashCursor)**

---

## Run Locally

Clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Run lint checks
npm run lint
```

---

## Environment Variables

To enable contact form submissions via EmailJS, create a `.env.local` file in the project root with the following keys:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

If these keys are left empty, the contact form automatically falls back to opening the visitor's default email client.
