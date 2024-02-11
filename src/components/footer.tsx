import React from "react";
import ButtonWithIcon from "./buttonwithicon";
import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <div className="Footer">
      <div className="foot-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugiat
        ipsum deserunt ea consequatur eum fugit commodi vero quo tempora
        ratione, suscipit pariatur provident accusantium.
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
