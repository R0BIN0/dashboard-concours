import React from "react";
import "./Orders.css";
import ProductOrder from "../ProductOrder/ProductOrder";
import { productData } from "../../data/product.data";

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders-container">
        <div className="orders-title-container">
          <h2>Suivi des commandes</h2>
        </div>
        <div className="orders-list-container">
          {productData.map((item) => (
            <ProductOrder key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
