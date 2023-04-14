import { useState } from "react";
import ShippingForm from "../ShippingForm";

export default function Product(props) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleExit = () => {
    setShowForm(false);
    console.log(props.id);
  };

  return (
    <div>
      <p>{props.nameGeo}</p>
      <p>{props.price}</p>
      <p>{props.descriptionGeo}</p>
      {/* <p>{props.attachments}</p> */}
      <button onClick={handleClick}>შეძენა</button>
      {showForm && <ShippingForm onExit={handleExit} />}
    </div>
  );
}
