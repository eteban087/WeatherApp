import { useEffect, useState } from "react";
import "../css/Nav.css";

export const Nav = ({city}) => {
  const [isDark, setIsDark] = useState();
  const [inputValue, setInputValue] = useState("")
  const ls = localStorage;

  const darkTheme = ls.getItem("DarkMode");
  const hanledToogle = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (darkTheme) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      ls.setItem("DarkMode", "Dark");

      document.body.classList.remove("claro");
    } else {
      ls.removeItem("DarkMode");

      document.body.classList.add("claro");
    }
  }, [isDark]);

  const SearchCity = ({target}) =>{
    setInputValue(target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    let valor = inputValue.trim();
    if(valor.length<=1) return
    city(valor)
    setInputValue("")
  }

  return (
    <nav className="nav">
      <>
        <div className="center">
          <h1>WeatherApp</h1>
        </div>

       
         <form className="center input" onSubmit={onSubmit}>
         <input 
            type="text" 
            placeholder="Buscar una ciudad"
            value={inputValue || ""} 
            onChange={SearchCity}
          />
              <i className="fa-solid fa-magnifying-glass icon"></i>
         </form>

      
        

        <div onClick={hanledToogle} className="center ">
          <div className="toogle_dark">
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon"></i>
            <div className={isDark ? "circle" : "circle trasladar "}></div>
          </div>
        </div>
      </>
    </nav>
  );
};
