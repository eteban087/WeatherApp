import React, { useEffect, useState } from "react";
import {
  metersToKilometers,
  kelvinToCelcius,
  KelvinToFahrenheit,
} from "../helpers/metods";
import "../css/WeatherInfo.css";

export const WeatherInfo = ({ weatherInfo, value }) => {
  const ls = localStorage;
  const [isCelcius, setIsCelcius] = useState();
  const celcius = ls.getItem("celcius");
  // console.log(celcius)

  useEffect(() => {
    if (celcius) {
      ls.removeItem("celcius");
      setIsCelcius(celcius);
    } else {
      setIsCelcius(celcius);
      ls.setItem("celcius", "celcius");
    }
  }, [value]);

  const mainDict = {
    Thunderstorm: "Tormenta",
    Drizzle: "Llovizna",
    Rain: "Lluvia",
    Snow: "Nieve",
    Mist: "Bruma",
    Smoke: "Humo",
    Haze: "Neblina",
    Dust: "Polvo",
    Fog: "Niebla",
    Sand: "Arena",
    Ash: "Ceniza",
    Squall: "Chubasco",
    Tornado: "Tornado",
    Clear: "Despejado",
    Clouds: "Nubes",
  };

  const iconDict = {
    "01d": "./img/01d.svg",
    "01n": "./img/01n.svg",
    "02d": "./img/02d.svg",
    "02n": "./img/02n.svg",
    "03d": "./img/03d.svg",
    "03n": "./img/03d.svg",
    "04d": "./img/04d.svg",
    "04n": "./img/04d.svg",
    "09n": "./img/09d.svg",
    "09d": "./img/09d.svg",
    "10d": "./img/10d.svg",
    "10n": "./img/10n.svg",
    "11n": "./img/11d.svg",
    "11d": "./img/11d.svg",
    "13d": "./img/13d.svg",
    "13n": "./img/13d.svg",
    "50n": "./img/50d.svg",
    "50d": "./img/50d.svg",
  };

  return (
    <div className="container_svg">
      {/* <img id="rectangle" src="./img/rectangle.svg" alt="" /> */}
      <svg
        className="rectangle"
        width="419"
        height="285"
        viewBox="0 0 419 285"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_576_1377)">
          <path
            d="M5 27.4471C5 10.5427 20.5103 -2.10705 37.0694 1.29222L392.669 74.29C405.086 76.8391 414 87.7683 414 100.445V248.362C414 263.108 402.046 275.062 387.3 275.062H31.7003C16.9541 275.062 5 263.108 5 248.362V27.4471Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_576_1377"
            x="0.145401"
            y="0.737305"
            width="418.709"
            height="284.034"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4.8546" />
            <feGaussianBlur stdDeviation="2.4273" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_576_1377"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_576_1377"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_576_1377"
            x1="5"
            y1="123.934"
            x2="414.028"
            y2="118.89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5836B3" />
            <stop offset="0.0001" stopColor="#5936B4" />
            <stop offset="1" stopColor="#362A84" />
          </linearGradient>
        </defs>
      </svg>

      {weatherInfo.map((weather) => (
        <div key={weather?.id} className="container_info">
          <h2 className="grados">
            {isCelcius
              ? kelvinToCelcius(weather.main.temp)
              : KelvinToFahrenheit(weather.main.temp)}
            °
          </h2>

          <div className="datails_info">
            <p>VIENTO: {metersToKilometers(weather.wind.speed)} Km/h</p>
            <p>PRESIÓN: {weather.main.pressure}mbar</p>
            <p>HUMEDAD: {weather.main.humidity}%</p>
          </div>

          <div>
            <h3 className="name_city">
              {weather?.name}, {weather.sys.country}
            </h3>
          </div>

          <h4 className="main">{mainDict[weather.weather[0].main]}</h4>
          <div className="container_icon">
            <img src={iconDict[weather.weather[0].icon]} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
