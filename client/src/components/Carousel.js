import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import logo from "../для печати наклеек.jpg";

export const MyCarousel = () => {
    return(
        <Carousel>
            <div>
                <img src={logo} alt=""/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={logo} alt=""/>
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    )
}