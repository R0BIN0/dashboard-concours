import React from "react";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import "./Button.css";

const Button = () => {
  return (
    <button className="main-button">
      <SettingsIcon />
    </button>
  );
};

export default Button;
