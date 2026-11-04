# 🛍️ Sky Mart – E-Commerce Web Application

Sky Mart is a responsive e-commerce web application built with **React** and **Tailwind CSS**. It provides a simple online shopping experience where users can explore products, browse categories, manage their cart and wishlist, and place orders through the application.

## ✨ Features

- **Product Browsing** – Explore products fetched from the Fake Store API.
- **Category Filtering** – Browse products by categories such as Electronics, Clothing, and Jewellery.
- **Search** – Search for products.
- **User Authentication UI** – Login, registration, and forgot password functionality.
- **Shopping Cart** – Add products, update quantities, remove items, and view the order subtotal.
- **Wishlist** – Save products for later.
- **Order Management** – Place orders and view purchased products.
- **Responsive Design** – Interface designed for different screen sizes.
- **Toast Notifications** – Feedback for user actions.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application functionality |
| Tailwind CSS | Styling and responsive layouts |
| React Router | Client-side navigation |
| Context API | Global state management |
| Redux Toolkit | State management |
| React Hook Form | Form handling and validation |
| Axios | API requests |
| Lucide React | Icons |
| React Toastify | Toast notifications |
| Fake Store API | Product data |

## 🌐 API

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product information.

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/sky-mart.git
```

### 2. Navigate to the project directory

```bash
cd sky-mart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📁 Project Structure

```text
sky-mart/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

*The structure above is illustrative; adjust it to match the actual folders in your repository.*

## ⚠️ Note

Sky Mart is a frontend learning project. Authentication, cart, wishlist, and order data are handled on the client side using browser storage and application state. It does not currently provide production-grade authentication, server-side order processing, or real payment processing.

## 🎯 Project Objective

The objective of this project is to strengthen practical skills in React development, component-based architecture, state management, API integration, form validation, routing, and responsive UI development.

---

**Built with ❤️ using React and Tailwind CSS.**