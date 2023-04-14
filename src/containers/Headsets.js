// import React from "react";
// import { useState } from 'react';
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
// import ProductComponent from "./ProductComponent";
const ProductsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const fetchProducts = useCallback(async () => {
    const response = await axios
      .get("http://localhost:5000/all_products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  });

  useEffect(() => {
    fetchProducts();
  });

  const iphones = products.filter((product) => product.category === "Headphone");

  const renderList = iphones.map((product) => {
    const { p_id, brand, name, image, price } = product;
    return (
      <div className="four wide column" key={p_id}>
        <Link to={`/products/${p_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{brand}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="ui stackable four column grid">
      {renderList}
    </div>
  );
};

export default ProductsList;
