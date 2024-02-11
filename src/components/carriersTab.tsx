import React from "react";
import Avatars from "./avatars";

function CarrierTab() {
  return (
    <div className="Carriers-parent">
      <div className="Carriers-child">
        <section className="Carrier-heading">
          Carriers <Avatars />
        </section>
        <section className="Carrier-text">
          Empowering Visions, Igniting Digital Spirits, Tomarrow and Beyond!
        </section>
        <button className="Carrier-Button">Join Us</button>
      </div>
    </div>
  );
}

export default CarrierTab;
