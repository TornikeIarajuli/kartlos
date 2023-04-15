import { useState } from "react";
import ShippingForm from "../ShippingForm";
import './product.css';

export default function Product(props) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
   setShowForm(!showForm);
  };

  const handleExit = () => {
    setShowForm(false);
  };

  return (
    <div className="product-card">
      <div className="product-content">
        <h6 className="product-title">{props.nameGeo}</h6>
        <h4 className="product-price">{props.price + "₾"}</h4>
        <p className="product-description">{props.descriptionGeo}</p>
        <button
          className="buy-btn"
          onClick={handleClick}
        >შეძენა</button>
        {showForm &&
          <div className="modal-overlay">
              <ShippingForm onExit={handleExit} />
            </div>
        }
      </div>
    </div>
  );
}
