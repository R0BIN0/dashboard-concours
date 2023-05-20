import React from "react";
import "./UserCard.css";
import Button from "../Button/Button";

const UserCard = () => {
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
          <p>David Spencer</p>
          <span>
            Membre depuis le <strong>20/02/2022</strong>
          </span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default UserCard;
