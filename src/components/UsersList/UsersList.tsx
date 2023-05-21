import React, { useState } from "react";
import "./UsersList.css";
import UserCard from "../UserCard/UserCard";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { IUser, usersData } from "../../data/users.data";

const UsersList = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>(usersData);

  const handleKeyword = (value: string): void => {
    setSearchKeyword(value);
    if (!value) return setSelectedUsers(usersData);
    const users = selectedUsers.filter((val) =>
      searchKeyword === undefined
        ? val
        : val.name.toLowerCase().includes(value.toLowerCase()) && val
    );
    setSelectedUsers(users);
  };

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
              onChange={(e) => handleKeyword(e.target.value)}
            />
          </div>
        </div>
        <div className="users-list-container">
          {selectedUsers.map((item) => (
            <UserCard key={item.id} {...item} />
          ))}
          {!selectedUsers.length && (
            <p className="user-list-no-user">
              Aucun utilisateur n'a été trouvé avec ce nom
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
