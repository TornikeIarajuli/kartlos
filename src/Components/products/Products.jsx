import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("https://kartlos-api.azurewebsites.net/api/products")
      .then((response) => setProducts(response.data.result))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
  };

  return (
    <div>
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id}>
            <Product
              id={product.id}
              nameGeo={product.nameGeo}
              price={product.price}
              descriptionGeo={product.descriptionGeo}
              // attachments={product[5].attachments[0].url}
            />
          </div>
        ))}
    </div>
  );
}

export default Products;
