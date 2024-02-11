import React, { useEffect, useState } from "react";

interface ServiceProps {
  text: string;
}

const services: string[] = [
  "web development",
  "3D design",
  "Product Design",
  "Marketing",
  "Digital Marketing",
  "SEO",
  "Cloud",
  "NLP",
  "Cyber Security",
];
const services_mini: string[] = [
  "web development",
  "3D design",
  "Product Design",
  "Marketing",
];

function ServiceButton({ text }: ServiceProps) {
  return <div className="serviceButton">{text}</div>;
}

function Services() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 692;
      if (isSmall !== isSmallScreen) {
        setIsSmallScreen(isSmall);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);
  console.log(isSmallScreen);
  return (
    <>
      {!isSmallScreen &&
        services.map((str, index) => <ServiceButton text={str} key={index} />)}
      {isSmallScreen &&
        services_mini.map((str, index) => (
          <ServiceButton text={str} key={index} />
        ))}
    </>
  );
}

export default Services;
