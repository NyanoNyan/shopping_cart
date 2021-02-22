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

const Nav = () => {
    return (
        <nav>
            <h3>Nav Bar</h3>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/shopping">
                    <li>Shop</li>
                </Link>

                <Link to="/checkout">
                    <button>Checkout</button>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
