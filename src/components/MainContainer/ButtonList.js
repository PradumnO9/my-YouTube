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
  "SmartPhones",
  "Instrumental",
  "Bollywood",
  "Movies"
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll buttonList-scroll">
      {buttonList.map((button, index) => {
        return <Button key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
