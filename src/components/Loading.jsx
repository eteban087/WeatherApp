import React from 'react'
import "../css/Loading.css"

export const Loading = () => {
  return (
    <div className='loading'>
        <div className="container_loading">
            <img src="./img/loading.svg" alt="" />
            <h2>Weather app</h2>
           
        </div>
        <div className="rectangle_loading">
            {/* <img src="./img/rectangle_loading.svg" alt="" /> */}
            <div className='loading_icons'>
            <img src="./img/loading_icons.svg" alt="" />
            </div>
        </div>
    </div>
  )
}
