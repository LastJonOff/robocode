import React  from "react";
import {Header} from "../components/Header";
import {MyCarousel} from "../components/Carousel";

export const MainPage = () => {
    return(
        <div>
            <Header/>
            <div><h2>
                Main page
            </h2></div>
            <div className="w-75 m-auto">
                <MyCarousel/>
            </div>
            <img src="../images/slide_2.jpg" alt="fff" className="h-25 w-25"/>
        </div>
    )
}