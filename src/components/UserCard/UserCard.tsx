import React, { FC } from "react";
import "./UserCard.css";
import Button from "../Button/Button";
import { IProps } from "./UserCard.types";

const UserCard: FC<IProps> = (props) => {
  return (
    <div className="userCard">
      <div className="userCard-img-container">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
      </div>
      <div className="userCard-info">
        <div>
          <p>{props.name}</p>
          <span>
            Membre depuis le <strong>{props.memberSince}</strong>
          </span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default UserCard;
