import React from 'react';
import logo from '../images/logo.png';
// ./images/logo.png
const Header = ({show,setShow}) => {
    const hanldeToggled = () =>{
        setShow(!show);
    }
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <a className="navHome" id="lws-home"> Home </a>
                    <a className="navCart" id="lws-cart" onClick={hanldeToggled}>
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">0</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header