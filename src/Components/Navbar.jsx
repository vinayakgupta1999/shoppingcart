import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = ({cart}) => {
    console.log("This is also cart", cart);
    return (
        <div className="navbar">
            <div className="left-nav">
                <Link to="/">
                    <img src="./Images/logo.png" className="logo" alt="logo" />
                </Link>
            </div>
            <div className="right-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                        <button><i class="fa fa-shopping-cart"></i></button>
                        <span className="total-cart-item">{cart.length}</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
