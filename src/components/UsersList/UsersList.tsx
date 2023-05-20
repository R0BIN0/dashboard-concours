import React from "react";
import "./UsersList.css";
import UserCard from "../UserCard/UserCard";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const UsersList = () => {
  return (
    <div className="usersList">
      <div className="usersList-container">
        <div className="usersList-title-container">
          <h2>Liste des utilisateurs</h2>
          <div className="userList-input-container">
            <SearchIcon />
            <input type="text" placeholder="Rechercher des utilisateurs" />
          </div>
        </div>
        <div className="users-list-container">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
