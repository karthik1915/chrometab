import * as React from "react";
const Line = () => (
  <svg
    className="svg"
    style={{
      overflow: "visible",
    }}
    x="100%"
    y={0}
  >
    <line x1="0%" y1="50%" x2="100%" y2="50%" className="dark-stroke" />
  </svg>
);
export default Line;
