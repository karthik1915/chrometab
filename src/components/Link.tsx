import React from "react";

interface LinkProps {
  text: string;
  link: string;
  isactive: boolean;
}

function LinkButton({ link, text, isactive }: LinkProps) {
  return (
    <a
      className={isactive ? "NavbarLink-active" : "NavbarLink-inactive"}
      href={link}
    >
      {text}
    </a>
  );
}

export default LinkButton;
