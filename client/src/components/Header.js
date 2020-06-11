import React from 'react';
import logo from "../для печати наклеек.jpg"

export const Header = () => {
    return(
        <nav className="bg-dark">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo ml-2">
                    <img src={logo} alt="" className="h-25 w-25"/>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/courses">Курсы</a></li>
                    <li><a href="/reviews">Отзывы</a></li>
                    <li>
                        <a className="btn-floating btn waves-effect waves-light red" href="/auth">
                            +
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}