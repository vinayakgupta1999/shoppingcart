import React, {useState} from 'react';
import "./Cart.css";

const Cart = ({cart, setCart}) => {

    const foodItemNumber = 1;

    const[totalPrice, setTotalPrice] = useState([]);

    const[decrementFoodItem, setDecrementFoodItem] = useState(foodItemNumber);

    const[incrementFoodItem, setIncrementFoodItem] = useState();

    console.log(cart);
    console.log(setCart);

    const deleteFoodItem = (id) =>{
        setCart(cart.filter((value) => value.id !== id))
    }

    const subTotal = cart.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      console.log(subTotal);

      const decreaseFoodItem = (id, price) =>{
          console.log("Decrease Food Item", id, price);
          const decrementNumber = foodItemNumber - 1;
          setDecrementFoodItem(decrementNumber);
      };

    return (
        <div className="cart">
            {cart.length > 0 ? <React.Fragment>
                <div className="cart-title">
                Cart Items
            </div>
            <div className="cart-data">
                {cart.map((value) => {
                    return <div className="cart-items">
                    <img src={value.image} className="cart-item-image" alt="cart-item-image" />
                    <div className="cart-food-title">
                        <span>{value.day}</span>
                    </div>
                    <div className="cart-food-counter">
                        <button onClick={() => decreaseFoodItem(value.id, value.price)}>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <div className="cart-food-price">
                        {value.price}
                    </div>
                    <div className="cart-food-delete-btn">
                        <button onClick={() => deleteFoodItem(value.id)}>Delete</button>
                    </div>
                </div>
                })}
            </div> <hr className="seprate-line" />
            <div className="total-price">
                <span>TOTAL PRICE :{subTotal}</span>
                <div className="total-price-btn">
                <button>Order Now</button>
                </div>
            </div>
            </React.Fragment>: null}
        </div>
    )
}

export default Cart
