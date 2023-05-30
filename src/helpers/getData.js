import axios from "axios"

export const getData = async (name)=>{
    const API_KEY = "983b9f6b5f718907d9092a81f6f90f04";
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
    const city = [];
    city.push(data);
   
    return city;
    
}