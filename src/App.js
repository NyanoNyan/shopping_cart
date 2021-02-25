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
import { BrowserRouter, Switch, Route } from "react-router-dom";

import uniqid from "uniqid";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";

import data from "./components/data";

function stateDataSetUp() {
    const dataHolder = [];

    data.map((eachData) => {
        dataHolder.push({
            id: eachData.id, 
            count: 0,
            src: eachData.src,
            name: eachData.name,
            price: eachData.price,
        });
    });
    return dataHolder;
}

const Routes = () => {
    // State configuration //
    const [numItems, setNumItems] = useState(stateDataSetUp());
    const [cartCount, setCartCount] = useState({
        id: uniqid(),
        count: 0,    
    });

    /// Functions set up ///
    useEffect(() => {
        const cartCounter = () => {
            const sum = numItems.reduce((accum, currVal) => accum + currVal.count, 0);
            setCartCount({
                ...cartCount, count: sum,
            });
        };
        cartCounter();
    }, [numItems]);
       
    const itemCounter = (id, value) => {
         // Set count for each item id
        setNumItems(numItems.map(
            (obj) => (obj.id == id ? { ...obj, count: value } : obj),
        ));
    };

    const valueSorter = (value, classNameLoc, classType) => {
        if (classNameLoc === "shopping-data") {
            // Add on value depending on what is activated
            switch (classType) {
                case "input-type":
                    value = value;
                    break;
                
                case "plus":
                        value += 1;
                    break;
                
                case "minus":
                    console.log(`In minus ${value}`);
                    if ((value - 1) < 0) {
                        console.log("zero alert");
                        value = 0;
                    } else {
                        value -= 1; 
                    }

                // eslint-disable-next-line no-fallthrough
                default:
                    console.log("Out of expression");
            }
        } else if (classNameLoc === "checkout-data") {
            // Add on value depending on what is activated
            switch (classType) {
                case "input-type":
                    value = value;
                    break;
                
                case "plus":
                    if (value === "nothing") {
                        value = 1;
                    } else {
                        value += 1;
                    }
                    break;
                
                case "minus":
                    console.log(`In minus ${value}`);
                    if ((value - 1) < 0) {
                        console.log("zero alert");
                        value = 0;
                    } else {
                        value -= 1; 
                    }

                // eslint-disable-next-line no-fallthrough
                default:
                    console.log("Out of expression");
            }
            if (value <= 0) {
                value = "nothing";
            } 
        }
        return value;
    };

    const tidyData = (e) => {
        let value;
        const classType = e.target.className;
        const { id } = e.target.parentElement;
        const classNameLoc = e.target.parentElement.className;

        // Getting the value when plus minus button is clicked
        if (classType === "plus") {
            value = parseInt(e.target.previousElementSibling.value, 10);
        } else if (classType === "minus") {
            value = parseInt(e.target.nextElementSibling.value, 10);
        } else {
            value = parseInt(e.target.value, 10);
        }

        // Check for NaN values
        if (Number.isNaN(value)) {
            console.log("NaN here");
            value = "";
        }

        // Value sorter, get the correct value depending on different section
        value = valueSorter(value, classNameLoc, classType);

        // Remove zero when someone types
        e.target.value = "";
        // Pass to Parent componenet for state changes
        itemCounter(id, value);
    };

    const removeItem = (e) => {
        const id = e.target.name;
        setNumItems(numItems.map(
            (obj) => (obj.id == id ? { ...obj, count: 0 } : obj),
        ));
    };

    return (
        // Settting up the Routes //
        <BrowserRouter>
            <Nav 
                cartCount={cartCount}
            />
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route
                    exact
                    path="/shopping"
                    render={() => (
                        <Shopping 
                            cartCount={cartCount}
                            data={data}
                            tidyData={tidyData}
                            numItems={numItems}
                        />
                    )}
                /> 
                <Route 
                    exact 
                    path="/checkout" 
                    render={() => (
                        <Checkout 
                            numItems={numItems}
                            tidyData={tidyData}
                            removeItem={removeItem}
                        />
                    )}
                /> 
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

// Instead of nav go to App.js 
// Is it possible to pass states through Route
// Top to bottom approach for this applicaiton
// Need to look at other sample codes
// Or use passing props between components
// Might need research on how to pass data when using routes.
