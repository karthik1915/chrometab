import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon: IconType;
}

function ButtonWithIcon({ text, onClick, icon: Icon }: ButtonProps) {
  return (
    <button className="buttonwithicon" onClick={onClick}>
      {text} <Icon />
    </button>
  );
}

export default ButtonWithIcon;
