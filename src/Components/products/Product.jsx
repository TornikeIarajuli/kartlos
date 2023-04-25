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
		<div className="product">
			<img src={props.url} alt="Bundle" className="product__img" />

			<h5 className="product__name">{props.nameGeo}</h5>

			<div className="product-description">
				{arr.map((element, index) => {
					return <p key={index}>• {element}</p>;
				})}
			</div>

			<button className="btn product__btn">Contact realtor</button>
		</div>
	);
}
