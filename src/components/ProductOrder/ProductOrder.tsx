import React, { useState, FC } from "react";
import "./ProductOrder.css";
import Button from "../Button/Button";
import { IProps } from "./ProductOrder.types";
import { OrderStatus } from "../../data/product.data";

const ProductOrder: FC<IProps> = (props) => {
  // const [orderStatusColor, setOrderStatusColor] = useState("")

  const orderColorStatus = () => {
    const color =
      props.status === OrderStatus.DELIVERED ? "#16E575" : "#E5B816";
    return color;
  };

  return (
    <div className="productOrder">
      <div className="productOrder-container">
        <div className="productOrder-left">
          <img src={props.picture} alt={props.name} />
        </div>
        <div className="productOrder-right">
          <div className="productOrder-right-top-container">
            <div>
              <p>{props.name}</p>
              <span>
                Commandé le : <strong>{props.orderedAt}</strong> à{" "}
                <strong>{props.price.toString()}€</strong>
              </span>
            </div>
            <Button />
          </div>
          <p className="productOrder-status">
            Statut :{" "}
            <span style={{ color: orderColorStatus() }}>{props.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
