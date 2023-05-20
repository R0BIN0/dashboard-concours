import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as ProductIcon } from "../../assets/product.svg";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as DisconnectIcon } from "../../assets/disconnect.svg";

import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import "./Navbar.css";

const navItems = [
  {
    id: uuidv4(),
    title: "Dashboard",
    icon: <DashboardIcon />,
    current: true,
  },
  {
    id: uuidv4(),
    title: "Produits",
    icon: <ProductIcon />,
    current: false,
  },
  {
    id: uuidv4(),
    title: "Messages",
    icon: <MessageIcon />,
    current: false,
  },
  {
    id: uuidv4(),
    title: "Notifications",
    icon: <NotificationIcon />,
    current: false,
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <LogoIcon />
          <h1>
            RUN <span>OR</span> DIE
          </h1>
        </div>
        <div className="avatar-container">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
          <div className="avatar-name-container">
            <p>Louise Spencer</p>
            <Button />
          </div>
        </div>
        <nav className="nav-container">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button data-current={item.current}>
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="disconnect-container">
          <DisconnectIcon />
          <span>Se Déconnecter</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
