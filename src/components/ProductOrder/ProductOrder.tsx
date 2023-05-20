import React from "react";
import "./ProductOrder.css";
import Button from "../Button/Button";

const ProductOrder = () => {
  return (
    <div className="productOrder">
      <div className="productOrder-container">
        <div className="productOrder-left">
          <img
            src="https://plus.unsplash.com/premium_photo-1661281362580-95188f976fa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="productOrder-right">
          <div className="productOrder-right-top-container">
            <div>
              <p>Adidas Air Force 1</p>
              <span>
                Commandé le : <strong>20/05/2023</strong> à <strong>59€</strong>
              </span>
            </div>
            <Button />
          </div>
          <p className="productOrder-status">
            Statut : <span>En cours de livraison</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
