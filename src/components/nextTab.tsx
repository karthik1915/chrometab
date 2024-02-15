import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NextTab() {
  useGSAP(() => {
    gsap.from(".NextTab-Parent", {
      paddingBottom: "0px",
      paddingRight: "0px",
      duration: 2,
      ease: "power4-out",
    });
    gsap.from(".NextTab-Child", {
      borderRadius: "0px",
      duration: 2,
      ease: "circ",
    });
  });
  return (
    <div className="NextTab-Parent">
      <div className="NextTab-Child"></div>
    </div>
  );
}

export default NextTab;
