import React, { useState } from "react";
import "./UsersList.css";
import UserCard from "../UserCard/UserCard";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { usersData } from "../../data/users.data";

const UsersList = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return (
    <div className="usersList">
      <div className="usersList-container">
        <div className="usersList-title-container">
          <h2>Liste des utilisateurs</h2>
          <div className="userList-input-container">
            <SearchIcon />
            <input
              type="text"
              placeholder="Rechercher des utilisateurs"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
        </div>
        <div className="users-list-container">
          <>
            {usersData
              .filter((val) =>
                searchKeyword === undefined
                  ? val
                  : val.name
                      .toLowerCase()
                      .includes(searchKeyword.toLowerCase()) && val
              )
              .map((item) => (
                <UserCard key={item.id} {...item} />
              ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
