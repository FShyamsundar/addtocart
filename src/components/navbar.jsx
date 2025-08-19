import React from "react";
export default function Navbar({ cartCount = 0, openCart }) {
  return (
    <div className="navbar">
      <h3 className="nav-content">FakeStore</h3>
      <button className="btn primary-btn" onClick={openCart}>Cart ({cartCount})</button>
    </div>
  );
}
