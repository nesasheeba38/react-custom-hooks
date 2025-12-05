import React from "react";
import { UseToggle } from "../CustomHook/UseToggle";

export const ToggleComponent = () => {
  const [isOn, toggle] = UseToggle(false);

  return (
    <>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};
