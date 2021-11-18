import React, {useState, useEffect, useContext} from 'react';
import "./Product.css";
import MyContext from "../Context/MyContext";
import Cart from './Cart';

const Product = ({foodItemsData, cart, setCart}) => {

    console.log("This is cart", cart);


    const itemsData = foodItemsData;

    console.log("This is itemsData", itemsData);

    const addFoodItem = (id, image, day, price) =>{
        console.log("Clicked", id, image, day, price);
        setCart ([...cart,{
            id,
            image, day, price
        }]);
    }

    return (
        <div className="product">
            <div className="product-title">
                Products
            </div>
            <div className="food-products">
            {itemsData?.map((value) => {
                    return <div className="food-items" key={value.id}>
                    <img src={value.image} className="food-image" alt="food-image" />
                    <div className="food-item-title">
                        <span>{value.day}</span>
                    </div>
                    <div className="food-item-size">
                        <button>{value.size}</button>
                    </div>
                    <div className="food-price-details">
                        <span>{value.price} Rs.</span>
                        <div className="add-item-btn">
                            <button onClick={() => addFoodItem(value.id, value.image, value.day, value.price)}>ADD</button>
                        </div>
                    </div>
                </div>
                })}
                {/* <div className="food-items">
                    <img src="./Images/pizza1.jpg" className="food-image" alt="food-image" />
                    <div className="food-item-title">
                        <span>Monday Special</span>
                    </div>
                    <div className="food-item-size">
                        <button>Small</button>
                    </div>
                    <div className="food-price-details">
                        <span>500 Rs.</span>
                        <div className="add-item-btn">
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
                <div className="food-items">
                    <img src="./Images/pizza2.jpg" className="food-image" alt="food-image" />
                    <div className="food-item-title">
                        <span>Monday Special</span>
                    </div>
                    <div className="food-item-size">
                        <button>Small</button>
                    </div>
                    <div className="food-price-details">
                        <span>500 Rs.</span>
                        <div className="add-item-btn">
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
                <div className="food-items">
                    <img src="./Images/pizza3.jpg" className="food-image" alt="food-image" />
                    <div className="food-item-title">
                        <span>Monday Special</span>
                    </div>
                    <div className="food-item-size">
                        <button>Small</button>
                    </div>
                    <div className="food-price-details">
                        <span>500 Rs.</span>
                        <div className="add-item-btn">
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
                <div className="food-items">
                    <img src="./Images/pizza4.jpg" className="food-image" alt="food-image" />
                    <div className="food-item-title">
                        <span>Monday Special</span>
                    </div>
                    <div className="food-item-size">
                        <button>Small</button>
                    </div>
                    <div className="food-price-details">
                        <span>500 Rs.</span>
                        <div className="add-item-btn">
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
                <div className="food-items">
                    <img src="./Images/pizza5.jpg" className="food-image" alt="food-image" />
                    <div className="food-item-title">
                        <span>Monday Special</span>
                    </div>
                    <div className="food-item-size">
                        <button>Small</button>
                    </div>
                    <div className="food-price-details">
                        <span>500 Rs.</span>
                        <div className="add-item-btn">
                            <button>ADD</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Product
