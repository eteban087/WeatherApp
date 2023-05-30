import React, { useEffect, useState } from "react";
import { WeatherInfo } from "./components/WeatherInfo";
import { Nav } from "./components/Nav";
import { getData } from "./helpers/getData";
import axios from "axios";
import { Loading } from "./components/Loading";
import { BtnDegrees } from "./components/BtnDegrees ";

export const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [isloading, setIsloading] = useState();
  const [value, setValue] = useState();
 
  const SearchCity = (term) =>{
      getData(term).then(city=>{
        setWeatherInfo(city);
        
      })
  }

  

  // useEffect(() => {
  //   SearchCity();
  // }, [])
  


  

  const hanledDegrees = () => {
    setValue(!value);
  };


  useEffect(() => {
    hanledDegrees();
    
  }, []);

  useEffect(() => {
    setIsloading(true)
    const succes = async ({ coords }) => {
     
      const API_KEY = "983b9f6b5f718907d9092a81f6f90f04";
      const lat = coords.latitude;
      const lon = coords.longitude;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const citys = [];
      citys.push(data);
      setWeatherInfo(citys);
      setIsloading(false);
    };
    

    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  return (
    <>
      <Nav city={SearchCity}   />
     
      {isloading ? (
        <Loading />
      ) : (
        <div className="container">
          <WeatherInfo weatherInfo={weatherInfo} value={value} />
          <BtnDegrees hanledDegrees={hanledDegrees} value={value} />
        </div>
      )}
    </>
  );
};
