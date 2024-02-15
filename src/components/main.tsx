import React from "react";
import Services from "./services";
import CarrierTab from "./carriersTab";

function Main() {
  const servicecount: number = 8;
  return (
    <div className="Main">
      <div className="Next-parent">
        <div className="Next-child">next</div>
      </div>
      <div className="intro-parent">
        <div className="intro-child">
          <div className="wedo">What we do </div>
          <div className="servicecount">{servicecount} services</div>
        </div>
      </div>

      <div className="services-parent">
        <div className="services-child">
          <Services />
        </div>
      </div>

      <div className="description-parent">
        <section>Tomarrow.</section>
        <div className="description-child">
          We are a Solution from the Future Innovation
        </div>
      </div>

      <CarrierTab />
    </div>
  );
}

export default Main;
