import React, { FC } from "react";
import "./UserCard.css";
import Button from "../Button/Button";
import { IProps } from "./UserCard.types";

const UserCard: FC<IProps> = (props) => {
  return (
    <div className="userCard">
      <div className="userCard-img-container">
        <img src={props.picture} alt="" />
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
