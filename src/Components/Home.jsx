import React from 'react';
import "./Home.css";
import Product from './Product';
import {Link} from "react-router-dom";

const Home = ({foodItemsData, cart, setCart}) => {
    return (
        <React.Fragment>
                   <div className="home">
            <div className="left-home">
                <div className="left-home-title">
                    Are you Hungry?
                </div>
                <span>Don't Wait</span>
                <Link to="/products">
                    <button>Order Now</button>
                </Link>
            </div>
            <div className="right-home">
                <img src="./Images/pizza.png" className="home-image" alt="home-image" />
            </div>
        </div>
        <Product foodItemsData={foodItemsData} cart={cart} setCart={setCart}/>
        </React.Fragment>
    )
}

export default Home
