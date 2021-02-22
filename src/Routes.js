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
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shopping from "./components/Shopping";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";

const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={App}/> 
                <Route exact path="/shopping" component={Shopping}/> 
                <Route exact path="/checkout" component={Checkout}/> 
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
