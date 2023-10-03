import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  console.log("navbar", cart);

  return (
    <div className="Navbar">
      <div className="content">
        <h1>AllProducts</h1>

        <NavLink to="checkout">
          <i class="bi bi-cart-check">{cart?.data?.carts?.length}</i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
