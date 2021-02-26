/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css";

const Nav = (props) => {
    const { cartCount } = props;
    return (
        <nav className="topnav">
            <h3>Smart Watch Shop</h3>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/shopping">
                    <li>Shop</li>
                </Link>
                <div className="checkout-basket" >
                    <Link to="/checkout">
                        <button className="cart-btn">
                            <img src={process.env.PUBLIC_URL + "/imgs/cart.png"} />
                            Checkout:
                            {" "}  
                            {cartCount.count}
                        </button>
                    </Link>
                </div>

            </ul>
        </nav>
    );
};

export default Nav;
