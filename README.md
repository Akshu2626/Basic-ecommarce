# eCommerce App

A React-based eCommerce application with product filtering, sorting, and cart management features.

## Assumptions and Features
- Users can filter products by multiple categories at once.
- Users can sort products by price or name.
- Cart items are stored in the browser's local storage to persist data across page reloads.
- The application is built using React, Context API, React Router, and mock product data.
- Filtering and sorting can be shared via URL to ensure state persistence even on page refresh and back navigation.

## Setup and Run Instructions

### Prerequisites:
1. **Node.js** and **npm** should be installed on your machine. If not, install them from [Node.js](https://nodejs.org/).
   
2. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ecommerce-app.git


3. **Navigate to the project directory:**
    cd ecommerce-app

4. **Install dependencies**
    npm install


### Run the Application:

1. **Start the development server**
    npm start

2. Open the app in your browser at http://localhost:3000.



### Features:
Product Listing: Displays all products with filtering and sorting options.
Filters: Multiple categories (e.g., electronics, fashion, etc.) to filter products.
Sorting: Sort products by price (low to high, high to low) and by name (A-Z, Z-A).
Cart Management: Add/remove products to/from the cart. Cart data is stored in local storage.
Persistent Filters and Sorting: Filters and sorting criteria are applied via URL, so users can share links with active filters and sorting.

### Limitations:
The app currently doesn't handle authentication or payment processing.
The product data is static and mocked (no real backend is used).
There is no user login or account management feature implemented.


### Additional Notes:
React Router: Used for navigation between pages (Home, Product Details, Cart).
Context API: Used for managing global state (cart data) across the application.
Local Storage: Used for cart persistence across page reloads.

### Assumptions:
Products are categorized as a static list in the mock API.
Users are expected to apply filters and sorting before navigating, and those filters will persist in the URL.
Known Issues:
Sorting and filtering do not work with real-time backend data. If a real API was integrated, the UI would need adjustments to work asynchronously.
