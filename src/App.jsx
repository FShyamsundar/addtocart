import { useState } from "react";
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx"
import Banner from "./components/banner.jsx"

function App() {
  const [product,setproduct]=useState([])
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


useEffect(()=>{
  fetch("https://fakestoreapi.com/products",{
    method:"GET",
  })
  .then((res)=>res.json())
  .then((data)=>setproduct(data))
  .catch((err)=>console.log(err))
},[]);


function addToCart(product) {
  const alreadyInCart = cart.find(item => item.id === product.id);
  
  if (alreadyInCart) {
    alert('Item is already added to cart!');
  } else {
    setCart([...cart, product]);
  }
}

function removeFromCart(productId) {
  const newCart = cart.filter(item => item.id !== productId);
  setCart(newCart);
}

function openCart() {
  setShowCart(true);
}

function closeCart() {
  setShowCart(false);
}


  
  return (
    <>
      <Navbar cartCount={cart.length} openCart={openCart} />
      <Banner />
      <div className="card-container">
        {product.map((course, idx) => (
          <ProductCard carddetails={course} key={idx} addToCart={addToCart} />
        ))}
      </div>
      <CartPopup 
      showCart={showCart} 
      cartItems={cart} 
      closeCart={closeCart} 
      removeItem={removeFromCart} 
    />
    </>
  );
}

export default App;




function ProductCard({ carddetails , addToCart}) {
  return (
    <div className="fs-card">
      <div className="fs-card-img-wrap">
        <img src={carddetails.image} alt="image" className="fs-card-img" />
      </div>

      <h3 className="fs-card-title">{carddetails.title}</h3>

      <div className="fs-card-row">
        <span className="fs-card-price">${carddetails.price}</span>
        <button className="fs-card-btn primary-btn" onClick={() => addToCart(carddetails)} >Add to Cart</button>
      </div>
    </div>
  );
}


function CartPopup({ showCart, cartItems, closeCart, removeItem }) {
  if (!showCart) return null;

  return (
    <div className="cart-popup-background">
      <div className="cart-popup">
        <h2>Your Cart</h2>
        <button className="close-button" onClick={closeCart}>×</button>
        
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}