import React from "react";

interface props {
  partnercount: number;
  onClick: () => void;
}

function PartnersTab({ partnercount, onClick }: props) {
  return (
    <div className="Partners-parent">
      <div className="Partners-child">
        <section className="count">{partnercount}+</section>
        <section className="text">Partners</section>
        <button className="discoverButton" onClick={onClick}>
          Discover More
        </button>
      </div>
    </div>
  );
}

export default PartnersTab;
