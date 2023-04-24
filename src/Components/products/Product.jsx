import { useState } from "react";
import ShippingForm from "../ShippingForm";
import "./product.css";

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
    <div className="product-card">
      <div className="product-content">
        <img className="product-image" src={props.url} alt="Bundle" />
        <h6 className="product-title">{props.nameGeo}</h6>
        <hr></hr>
        <div className="product-description">
          {arr.map((element, index) => {
            return <p key={index}>• {element}</p>;
          })}
        </div>
        <h4 className="product-price">{props.price + "₾"}</h4>
        <button className="buy-btn" onClick={handleClick}>
          შეძენა
        </button>
        {showForm && (
          <div className="modal-overlay">
            <ShippingForm onExit={handleExit} id={props.id} />
          </div>
        )}
      </div>
    </div>
  );
}
