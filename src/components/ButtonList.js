import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Gaming",
  "Music",
  "Trailers",
  "Flute",
  "Thrillers",
  "Mixes",
  "TSeries",
  "ArigitSingh",
  "Live",
  "JavaScript",
  "SmartPhones"
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto buttonList-scroll">
      {buttonList.map((button, index) => {
        return <Button key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
