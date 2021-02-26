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
import SimpleImageSlider from "react-simple-image-slider";
import data from "./data";
import "../style/Home.css";

const Home = () => {
    const dataHolder = [];

    data.map((eachData) => {
        dataHolder.push({
            url: process.env.PUBLIC_URL + eachData.src,
        });
    });
    // console.log(dataHolder);
    return (
        <div className="main-holder-home">
            <h3 className="home-title">Get your Smart Watch</h3>
            <div className="image-slider">
                <SimpleImageSlider
                    style={{margin: "auto", backgroundSize: "contain"}}
                    width={400}
                    height={600}
                    images={dataHolder}
                    showNavs={true}
                />
            </div>
        </div>
    );
};

export default Home;
