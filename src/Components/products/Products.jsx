import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import "./products.css";

function Products() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://kartlos-api.azurewebsites.net/api/products")
			.then((response) => {
				setProducts(response.data.result);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<section className="products">
			{isLoading ? (
				<div className="loader" />
			) : (
				Array.isArray(products) &&
				products.map((product) => (
					<div key={product.id}>
						<Product
							id={product.id}
							url={product.attachments[0].url}
							nameGeo={product.nameGeo}
							price={product.price}
							descriptionGeo={product.descriptionGeo}
						/>
					</div>
				))
			)}
		</section>
	);
}

export default Products;
