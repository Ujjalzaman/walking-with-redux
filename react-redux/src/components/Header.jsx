import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const state = useSelector((state) => state);
    const cartCount = state.reduce((total, state) => state.cartQuantity + total, 0)
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <a className="navHome" id="lws-home"> Home </a>
                    <a className="navCart" id="lws-cart" Link to='/'>
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{cartCount}</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header