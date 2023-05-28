import React, { useEffect, useState } from "react";
import "../css/BtnDegrees.css";
export const BtnDegrees = ({ hanledDegrees, value }) => {
  const ls = localStorage;
  const celcius = ls.getItem("celcius")
  const [iscelcius, setIsCelcius] = useState();

  useEffect(() => {
   setIsCelcius(celcius)
  }, [value])
  
  return (
    <button onClick={hanledDegrees} className="btn_degrees">
      {iscelcius ? "Cambiar a F°" : "Cambiar a C°"}
    </button>
  );
};
