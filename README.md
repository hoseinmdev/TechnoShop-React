# 🛍 Techno Shop

👋🏻 Hi! This is **Techno Shop** («تکنو شاپ») — a Persian (RTL) e-commerce storefront, like Technolife and DigiKala, built with React.

## You can visit Techno-Shop online here: [Live Demo](https://hoseinshopcartreact.netlify.app)

---

## 😍 Features

- 🌱 Fully Persian & right-to-left (RTL) UI
- 🔐 Signup, login, logout & password reset — handled entirely on the client with `localStorage` (mock auth, no backend needed)
- 🪟 Modern glassmorphism auth pages on desktop
- 💥 Fully responsive (mobile & desktop)
- 🌓 Dark mode & light mode
- 📱💻 Lots of products (phones, laptops, tablets, smart watches, speakers, gaming...)
- 🛒 Add products to cart — the cart is persisted in `localStorage`
- 👌🏻 Filter & sort products by category, price and more
- 🔍 Product search
- 💎 Landing sliders & category shortcuts
- 🖼 A dedicated page for every product, with comments and technical specs

## 🧰 Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 18 (Create React App) |
| Routing | React Router v6 (lazy-loaded pages) |
| State | Redux Toolkit (cart persisted to `localStorage`) |
| Forms | Formik + Yup |
| Styling | Tailwind CSS (class-based dark mode) |
| HTTP | Axios |
| Notifications | React-Toastify |
| Sliders | Swiper |

> ℹ️ **Note on auth:** the original backend for OTP/login APIs is unreliable, so authentication was migrated to a pure `localStorage` mock — credentials and login status are stored client-side only. Don't use it as a reference for real-world security.

## 🚀 Getting Started

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build
```

### ***Enjoy it 😉***

<br />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=27&duration=2000&pause=1000&color=ACACAC&repeat=false&width=468&height=41&lines=%F0%9F%92%8EWatch+my+another+projects)](https://git.io/typing-svg)

- You can also visit **Music-City** online here: [Live Demo](https://hosein-music-city.netlify.app/)
- You can visit **Movie-City** online here: [Live Demo](https://movie-city-nextjs.netlify.app/)
