# FakeStore - React Shopping Cart Project

A simple e-commerce application built with React that displays products from the FakeStore API and allows users to manage a shopping cart.

## 🚀 Features

- **Product Display**: Fetches and displays products from FakeStore API
- **Shopping Cart**: Add items to cart with duplicate prevention
- **Cart Management**: View and remove items from cart
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Cart count updates instantly
- **User Alerts**: Notifications when trying to add duplicate items

## 🛠️ Technologies Used

- **React** - Frontend library
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **FakeStore API** - External API for product data
- **React Hooks** - State management (useState, useEffect)

## 🎯 How It Works


1. **App Component**
   - Manages application state (products, cart items, cart visibility)
   - Fetches product data from FakeStore API
   - Handles cart operations (add, remove, open, close)

2. **Navbar Component**
   - Displays site title and cart button
   - Shows current cart count
   - Triggers cart popup when clicked

3. **ProductCard Component**
   - Displays individual product information
   - Handles "Add to Cart" functionality
   - Shows product image, title, and price

4. **CartPopup Component**
   - Modal overlay showing cart contents
   - Displays all cart items with remove options
   - Provides close functionality

## 🎨 Styling

- Custom CSS with modern design principles
- Responsive grid layout for products
- Modal popup with overlay
- Hover effects and smooth transitions
- Mobile-first approach

## 📱 Responsive Design

- **Desktop**: Multi-column product grid
- **Tablet**: Adjusted grid columns
- **Mobile**: Single-column layout with optimized spacing


## 🐛 Common Issues & Solutions

**Issue**: Products not loading
- **Solution**: Check internet connection and API availability

**Issue**: Cart not updating
- **Solution**: Verify state management and component re-renders

**Issue**: Styling issues
- **Solution**: Check CSS class names and import statements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


