import React from "react";
import "./Orders.css";
import ProductOrder from "../ProductOrder/ProductOrder";

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders-container">
        <div className="orders-title-container">
          <h2>Suivie des commandes</h2>
        </div>
        <div className="orders-list-container">
          <ProductOrder />
          <ProductOrder />
          <ProductOrder />
          <ProductOrder />
          <ProductOrder />
        </div>
      </div>
    </div>
  );
};

export default Orders;
