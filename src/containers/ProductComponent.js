import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map(function c(product) {
    const { p_id, title, image, price, category } = product;
    return (

      <div className="four wide column" key={p_id}>
        <Link to={`/products/${p_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
                
              </div>
            </div>
            
          </div>
        </Link>
        
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductsList;
