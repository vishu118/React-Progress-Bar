import React from "react";
import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="slider">
        <h2>{`${value}%`}</h2>
        <input type="range" defaultValue={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Slider;
