# Product Management Application

🔗 Live Demo: https://your-live-link-here.vercel.app


## 📌 Overview

This project is a **Product Management Application** built as part of an assignment. The application allows users to manage a list of products with features such as viewing products in different layouts, searching with debounce, adding and editing products, and pagination. All data is handled **in-memory only** (no backend or database integration).

---

## ✨ Features

### 1. Product List Display

* Displays a list of products with essential details such as name, price, category, stock, and description.
* Supports two view modes:

  * **List View**: Displays products in a table format.
  * **Card View**: Displays products in a grid/card layout.
* A toggle button allows users to switch between List View and Card View seamlessly.

---

### 2. Search Functionality

* Search products by **product name**.
* Search works in **real time** as the user types.
* A **500ms debounce** is implemented to improve performance and avoid unnecessary re-renders.

---

### 3. Add and Edit Product

* A product form is provided to add and edit products.
* Form fields include:

  * **Name** (required)
  * **Price** (number, required)
  * **Category** (required)
  * **Stock** (number)
  * **Description** (optional)

#### Validation Rules

* Required fields show error messages if left empty.
* Price and Stock accept only numeric values.
* Validation errors are displayed clearly below the respective fields.

> ℹ️ Note: All product data is stored in application state (memory only). Data will reset on page refresh.

---

### 4. Pagination

* Pagination is implemented for the product list.
* Limits the number of products displayed per page.
* Includes navigation controls to move between pages.

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **CSS / Plain CSS** (for styling)
* React Hooks (`useState`, `useEffect`, `useMemo`, etc.)

---

## 🚀 How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:

   ```bash
   cd project-folder
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   npm start
   ```
5. Open your browser and visit:

   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure (Sample)

```
.
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public/
│
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Search.jsx
    │   ├── Search.css
    │   ├── Toggle.jsx
    │   └── Toggle.css
    │
    ├── context/
    │   ├── data.js
    │   └── ProductContext.jsx
    │
    └── pages/
        ├── Home/
        │   ├── Home.jsx
        │   ├── Home.css
        │   │
        │   └── components/
        │       ├── CardView/
        │       │   ├── CardView.jsx
        │       │   └── CardView.css
        │       │
        │       ├── ListView/
        │       │   ├── ListView.jsx
        │       │   └── ListView.css
        │       │
        │       ├── Pagination/
        │       │   ├── Pagination.jsx
        │       │   └── Pagination.css
        │       │
        │       └── ProductManagerCard/
        │           ├── ProductManagerCard.jsx
        │           └── ProductManagerCard.css
        │
        └── ProductManger/
            ├── ProductManger.jsx
            ├── ProductManger.css
            │
            └── components/
                ├── DisplayList.jsx
                ├── HomeNav.jsx
                └── HomeNav.css


```

---

## ✅ Assignment Coverage Checklist

* [x] Product List (Table & Card View)
* [x] View Toggle
* [x] Real-time Search
* [x] Debounce (500ms)
* [x] Add Product
* [x] Edit Product
* [x] Form Validation
* [x] In-memory Data Storage
* [x] Pagination

---

## 📌 Notes

* No backend or database is used.
* State management is handled within React.
* UI is kept simple and user-friendly.

---

## 👤 Author

**Abhishek Pandey**

---

Feel free to enhance the UI or extend functionality such as sorting, filtering, or persistent storage in the future.
