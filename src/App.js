import React, { useState } from "react";
import looss from "./images/looss";
import proofit from "./images/proofit";
import image from "./images/image";
import "./styles.css";

var user = 0;
var current = 0;
var quantity = 0;
export default function App() {
  var [price, setPrice] = useState();
  var [state, setState] = useState();
  var [images, setImages] = useState(image);
  function changeStock(event) {
    user = event.target.value;
  }
  function changeCurrent(event) {
    current = event.target.value;
  }
  function changeQuantity(event) {
    quantity = event.target.value;
  }
  function clickChange() {
    var stock = user * quantity;
    var price = current * quantity;
    if (stock - price > 0) {
      var loss = stock - price;
      setPrice(loss);
      setState("Absolute Loss");
      setImages(looss);
    } else {
      var profit = price - stock;
      setPrice(profit);
      setState("Absolute Profit");
      setImages(proofit);
    }
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Profit-Loss Calculator</h1>
        <h2>
          Enter user's stock price :{" "}
          <input onChange={changeStock} placeholder="Stock price" />
        </h2>
        <h2>
          Enter current stock price :{" "}
          <input onChange={changeCurrent} placeholder="Current Stock price" />{" "}
        </h2>
        <h2>
          Number of Quantity :{" "}
          <input onChange={changeQuantity} placeholder="Quantity" />
        </h2>
        <button className="button" onClick={clickChange}>
          Check
        </button>
      </div>
      <div className="main">
        <div className="balance">
          {state} : {price}
          <div className="image">
            <img className="design" src={images} alt="loading" />
          </div>
        </div>
      </div>
    </div>
  );
}
