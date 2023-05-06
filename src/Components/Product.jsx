import { useState } from "react";

import "./product.css";
import ShippingForm from "./ShippingForm";

export default function Product(props) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleExit = () => {
    setShowForm(false);
  };

  let arr = props.descriptionGeo.split(/• /).slice(1);

  return (
    <div className="product">
      <div className="product__side product__side--front">
        <img
          className="product__picture product__picture--1"
          src={props.url}
          alt=""
        />
        <h4 className="product__heading">
          <span className="product__heading-span product__heading-span--1">
            {props.nameGeo}
          </span>
        </h4>
        <div className="product__details">
          <ul>
            {arr.map((element, index) => {
              return <li key={index}>• {element}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="product__side product__side--back product__side--back-1">
        <div className="product__cta">
          <div className="product__price-box">
            <p className="product__price-value">{props.price + "₾"}</p>
          </div>
          <button className="btn btn--white" onClick={handleClick}>
            ყიდვა
          </button>
        </div>
      </div>
      {showForm && (
        <div className="modal-overlay">
          <ShippingForm onExit={handleExit} id={props.id} />
        </div>
      )}
    </div>
  );
}
