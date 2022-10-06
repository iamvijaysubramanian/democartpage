import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import Cart from "./cart";

function App() {
  const [products,setProducts]=useState([
    {
      id:1,
      name:"iphone 14 pro",
      price:130000,
      img:"https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907-geo_inline.jpg"
    },
    {
      id:2,
      name:"samsung s22 ultra",
      price:70000,
      img:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
    },
    {
      id:3,
      name:"oneplus 10 pro",
      price:60000,
      img:"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"
    },
    {
      id:4,
      name:"iphone 13 pro",
      price:90000,
      img:"https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg"
    },
    {
      id:5,
      name:"samsung galaxy s22",
      price:55000,
      img:"https://m.media-amazon.com/images/I/71HUnJvHsbL._SL1500_.jpg"
    },
    {
      id:6,
      name:"oneplus 9 pro",
      price:45000,
      img:"https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg"
    },
    {
      id:7,
      name:"xiaomi 12 pro",
      price:60000,
      img:"https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg"
    },
    {
      id:8,
      name:"iphone 12 pro",
      price:65000,
      img:"https://m.media-amazon.com/images/I/71xkMA+gvYL._SX522_.jpg"
    },
    {
      id:9,
      name:"xiaomi 11 pro",
      price:40000,
      img:"https://unite4buy.ru/media/images/2021/03/30/xiaomi-mi-11-pro-3_oTsoJgq.jpg"
    }
  ])
  const [cartItems,setCartItems] =useState([])
  let addToCart =(product)=>{
    setCartItems([...cartItems,product])
  }
  let removeFromCart =(product)=>{
    const indexVal = cartItems.findIndex(obj=> obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])
  }
  return (
    <div className="container">
    <header className="bg-dark py-5 m-2">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Mobile Store</h1>
          <p className="lead fw-normal text-white-50 mb-0">The Destination for all your mobiles</p>
        </div>
      </div>
    </header>

    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
          {
            products.map((product)=>{
              return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>
            })
          }
          </div>
        </div>
        <div className="col-lg-4">
        <h3>Cart</h3>  
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
