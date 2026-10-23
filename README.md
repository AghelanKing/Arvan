# ARVAN --- Furniture E-commerce

**A Persian RTL furniture storefront built with Next.js**

A portfolio project focused on practical e-commerce features, responsive
UI, authentication, and server-side data handling.
:::

---

## 🇮🇷 معرفی پروژه

**ARVAN** یک فروشگاه اینترنتی مبلمان با رابط کاربری فارسی و راست‌چین
(RTL) است. این پروژه با هدف تمرین و نمایش مهارت‌های توسعه‌ی وب با React و
Next.js ساخته شده و قابلیت‌هایی مثل نمایش محصولات، فیلتر و صفحه‌بندی،
علاقه‌مندی‌ها، سبد خرید، نظرات کاربران و مدیریت پروفایل را ارائه می‌دهد.

> **وضعیت پرداخت:** پرداخت در این نسخه نمایشی است و تراکنش واقعی انجام
> نمی‌شود.

## ✨ Features

- **Product catalog** --- browse furniture products and view
  individual product details.
- **Search and filtering** --- filter the catalog using available
  product attributes and price range.
- **Pagination** --- navigate through product results.
- **Featured products** --- highlight selected products on the
  storefront.
- **Authentication** --- sign in and sign out.
- **User profile** --- view and update profile information.
- **Favorites** --- save and remove favorite products for the
  signed-in user.
- **Shopping cart** --- add products, update quantities, remove items,
  and view the cart total.
- **Comments and replies** --- submit comments and reply to existing
  discussions.
- **Contact form** --- send a message through the contact page.
- **Responsive layout** --- layouts designed for mobile, tablet, and
  desktop.
- **Loading and error states** --- skeletons, pending states,
  `not-found`, and error UI.
- **Dynamic metadata** --- product-specific page titles and
  descriptions.
- **Persian RTL interface** --- right-to-left layout and Persian
  typography.

## 🧰 Tech Stack

- **Next.js** --- App Router, Server Components, Server Actions, and
  route conventions
- **React**
- **TypeScript**
- **PostgreSQL** --- relational data storage
- **Auth.js / NextAuth** --- authentication
- **Tailwind CSS** --- styling and responsive layouts
- **shadcn/ui** --- reusable UI components
- **Lucide React / React Icons** --- icons
- **Motion** --- UI animation
- **Magic UI** --- selected visual components

> Add or remove libraries in this list to match the dependencies
> currently installed in the repository.

## 🚀 Getting Started

### Prerequisites

- Node.js version compatible with the project's installed Next.js
  version
- npm
- Access to a configured PostgreSQL database

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add the environment
variables required by your application, such as the PostgreSQL
connection string and authentication secrets.

Use the exact variable names expected by your code. **Never commit
`.env.local`, database credentials, authentication secrets, or other
private keys to GitHub.**

### 4. Start the development server

```bash
npm run dev
```

Open <http://localhost:3000> in your browser.

### 5. Create a production build

```bash
npm run build
npm run start
```

## 🗂️ Main Areas

Area Purpose

---

`app/` Routes, layouts, metadata, loading and error boundaries
`components/` Reusable UI and feature components
`lib/` Shared utilities and data-access functions
`public/` Static assets such as product images

The exact structure may differ depending on the current repository
organization.

## 🔐 Security Notes

- Authorization and ownership checks should run on the server for
  every protected mutation.
- Client-side UI restrictions are not a substitute for server-side
  authorization.
- Keep secrets in environment variables and out of source control.
- The checkout flow is demonstrative; no real payment provider is
  connected in this version.

## 🧪 Suggested Manual Test Flow

1.  Create an account or sign in.
2.  Browse products and test filters and pagination.
3.  Open a product detail page.
4.  Add and remove a product from favorites.
5.  Add a product to the cart, change its quantity, and remove it.
6.  Submit a comment and test replies.
7.  Update profile information.
8.  Test signed-out states, invalid routes, and error/loading UI.
9.  Verify the layout on mobile and desktop.

## 📸 Screenshots

Add screenshots or a short GIF here to help reviewers quickly understand
the interface.

For example:

```md
![Home page](./docs/screenshots/home.png)
![Product details](./docs/screenshots/product-details.png)
![Shopping cart](./docs/screenshots/cart.png)
```

Only keep these paths after adding the corresponding image files.

## 🛣️ Possible Future Improvements

- Integrate a real payment provider where legally and technically
  supported.
- Add automated tests for critical user flows.
- Improve accessibility and keyboard navigation.
- Add product image optimization and performance monitoring.
- Add deployment instructions and a public demo link when available.

## 👤 Author

Built as a personal portfolio project to practice building a complete
e-commerce experience with React and Next.js.

- **GitHub:** https://github.com/AghelanKing

---

**ARVAN --- خانه‌ات، داستان توست.**
