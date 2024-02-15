import React from "react";
import ButtonWithIcon from "./buttonwithicon";
import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <div className="Footer">
      <div className="foot-text">
        We're not just about trends; we're about transformation. In a world
        where technology evolves at lightning speed, we're here to guide you
        through the dynamic landscape of digital possibilities.
      </div>
      <div className="foot-button">
        <ButtonWithIcon
          text="Let's Collaborate"
          onClick={() => {}}
          icon={MdOutlineArrowOutward}
        />
      </div>
    </div>
  );
}

export default Footer;
