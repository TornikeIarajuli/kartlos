import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <section className="products">
      {isLoading ? (
        <div className="loader" />
      ) : (
        Array.isArray(products) &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            url={product.attachments[0].url}
            nameGeo={product.nameGeo}
            price={product.price}
            descriptionGeo={product.descriptionGeo}
          />
        ))
      )}
    </section>
  );
}

export default Products;
