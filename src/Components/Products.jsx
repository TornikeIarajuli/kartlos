import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./products.css";
import ShippingForm from "./ShippingForm";

function Products() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	let [productId, setProductId] = useState(undefined);
	useEffect(() => {
		fetch("https://kartlos-api.azurewebsites.net/api/products")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setProducts(data.result);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleOpenModal = (productID) => {
		setProductId(productID);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<section className="products">
			{isLoading ? (
				<div className="loader" />
			) : (
				Array.isArray(products) &&
				products.map((product) => (
					<Product
						showPopup={handleOpenModal}
						key={product.id}
						id={product.id}
						url={product.attachments[0].url}
						nameGeo={product.nameGeo}
						price={product.price}
						descriptionGeo={product.descriptionGeo}
					/>
				))
			)}
			{showModal && (
				<div className="modal-overlay">
					<ShippingForm id={productId} onExit={handleCloseModal} />
				</div>
			)}
		</section>
	);
}

export default Products;
