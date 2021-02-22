/* eslint-disable indent */
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
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import data from "./data";
import "../style/Shopping.css";

const SetUpCards = (props) => {
    const { dataVal, cartCounter } = props;
    return (
        <div>
            <div className="each-cards">
                <img src={process.env.PUBLIC_URL + dataVal.src} />
            </div>

            <div className="item-details">
                <p >{dataVal.name}</p>
            </div>
            
            <div>
                <button className="minus" onClick={(e) => { cartCounter(e); }}>-</button>
                <input 
                    className="input-type" 
                    type="number"
                    onClick={(e) => cartCounter(e)} 
                />
                <button className="plus" onClick={(e) => { cartCounter(e); }}>+</button>
                <button>Add to Cart</button>
            </div>

        </div>
    );
};

const Shopping = () => {
    // state configuration
    const [cartCount, setCartCount] = useState(0);
    const [itemCount, setItemcount] = useState(0);

    // functions set up
    useEffect(() => {
        console.log(cartCount);
    });

    const cartCounter = (e) => {
        console.log("I'm here");
        const type = e.target.className;
        switch (type) {
            case "input-type":
                setCartCount(e.target.value);
                break;
            
            case "plus":
                setCartCount(cartCount + 1);
                break;
            
            case "minus":
                setCartCount(cartCount - 1);
                
            // eslint-disable-next-line no-fallthrough
            default:
                console.log("Out of expression");
        }
        
    };

    const newCards = data.map((dataVal) => (
        <SetUpCards 
            key={uniqid()}
            dataVal={dataVal}
            cartCounter={cartCounter}
        />
    ));
    
    return (
        <div className="main-shopping">
            <h3>Shopping Page</h3>

            <div className="main-holder-cards">
                {newCards}
            </div>
        </div>
    );
};

export default Shopping;
