import React, { useState ,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Product from './Components/Product';


const App = ({foodItemsData,cart,setCart}) => {

  let routes = useRoutes([
    { path: "/", element: <Home foodItemsData={foodItemsData} cart={cart} setCart={setCart}/> },
    { path: "/products", element: <Product foodItemsData={foodItemsData} cart={cart} setCart={setCart} /> },
    { path: "/cart", element: <Cart foodItemsData={foodItemsData} cart={cart} setCart={setCart} /> },
    // ...
  ]);
  return routes;
};


const AppWrapper = () => {  
  const[foodItemsData, setFoodItemsData] = useState([]);
  const [cart, setCart]=useState([])
  const foodItemData = () =>{
    fetch("https://run.mocky.io/v3/b846b475-39d0-4d67-af43-4cd53839661e").then((apiData) => apiData.json())
    .then((actualData) => {
        console.log(actualData);
        setFoodItemsData(actualData);
    });
};

  useEffect(() =>{
    foodItemData();
}, []);
  return (
    <Router>
      <Navbar cart={cart}/>
      <App foodItemsData={foodItemsData} cart={cart} setCart={setCart}/>
      <Footer/>
    </Router>
  );
};

export default AppWrapper;