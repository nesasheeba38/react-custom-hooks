import { useState } from "react";

export const UseToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(value=>!value);
  };

  return [value, toggle];
};
