export const metersToKilometers = (num) =>{
  return (num*3.6).toFixed(1)
}

export const kelvinToCelcius = (kelvin)=>{
   return  (kelvin - 273.15).toFixed(0)

}

export const KelvinToFahrenheit = (kelvin) =>{
  
  return (((kelvin - 273.15) * 9/5) + 32 ).toFixed(0)


}