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
		<div className="card">
			<div className="card__side card__side--front">
				<img
					className="card__picture card__picture--1"
					src={props.url}
					alt=""
				/>
				<h4 className="card__heading">
					<span className="card__heading-span card__heading-span--1">
						{props.nameGeo}
					</span>
				</h4>
				<div className="card__details">
					<ul>
						{arr.map((element, index) => {
							return <li key={index}>• {element}</li>;
						})}
					</ul>
				</div>
			</div>
			<div className="card__side card__side--back card__side--back-1">
				<div className="card__cta">
					<div className="card__price-box">
						<p className="card__price-only">Only</p>
						<p className="card__price-value">$300</p>
					</div>
					<a href="#popup" className="btn btn--white">
						Book now!
					</a>
				</div>
			</div>
		</div>
	);
}
