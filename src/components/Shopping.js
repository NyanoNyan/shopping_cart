/* eslint-disable react/no-array-index-key */
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
import "../style/Shopping.css";

const SetUpCards = (props) => {
    const { dataVal, cartCount, tidyData, numItems } = props;

    return (
        <div>
            <div className="each-cards">
                <img src={process.env.PUBLIC_URL + dataVal.src} />
            </div>

            <div className="item-details">
                <p className="item-name">{dataVal.name}</p>
            </div>
            
            <div id={dataVal.id} className="shopping-data">
                <button className="minus" onClick={(e) => tidyData(e)}>-</button>
                <input
                    className="input-type" 
                    type="number"
                    value={numItems.count}
                    onChange={(e) => tidyData(e)} 
                    pattern="[0-9]*"
                />
                <button className="plus" onClick={(e) => tidyData(e)}>+</button>
                {/* <button>Add to Cart</button> */}
                <div className="item-price">
                    <p>£{dataVal.price.toFixed(2)}</p>
                </div>
            </div>

        </div>
    );
};

const Shopping = (props) => {
    const { cartCount, data, tidyData, numItems } = props;
    console.log(cartCount);
    const newCards = data.map((dataVal, id) => (
        <SetUpCards 
            key={"data" + id}
            dataVal={dataVal}
            cartCount={cartCount}
            tidyData={tidyData}
            numItems={numItems[id]}
        />
    ));
    
    return (
        <div className="main-shopping">
            <h3>Shopping Page</h3>

            <div className="main-holder-cards-shopping">
                {newCards}
            </div>
        </div>
    );
};

export default Shopping;
// First just shows add to cart
// Then if a person clicks on add cart. Can add multiple items.
