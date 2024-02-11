import React from "react";
import ButtonWithIcon from "./buttonwithicon";
import { CgMail } from "react-icons/cg";
import LinkButton from "./Link";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar-Heading">
          <a>Tomarrow</a>
        </div>
        <div className="Navbar-middle">
          <LinkButton isactive={true} text="About" link="" />
          <LinkButton isactive={false} text="Our Teams" link="" />
          <LinkButton isactive={false} text="News" link="" />
        </div>
        <div>
          <ButtonWithIcon text="Contact Us" onClick={() => {}} icon={CgMail} />
        </div>
      </div>
    </>
  );
}
export default Navbar;
