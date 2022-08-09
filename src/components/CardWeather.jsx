import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardWeather = ({lat , lon}) => {

    const [weather, setWeather] = useState()
    const [temperature, setTemperature] = useState(true)

    useEffect(() => {
        if(lon){
            const APIkey = '1796aeae3e3a63e9f38447ecd112d282'
            const URL  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

            axios.get(URL)
                .then(res => setWeather(res.data))
        }
    }, [lat, lon])

    const convertTemperature = () => setTemperature(!temperature)

    const ConvertToFahrenheit = () =>{
        const temp = weather?.main.temp
        const result = (temp - 273.15) * 9/5 + 32
        return result.toFixed(2)
    }
    const ConvertToCelsius = () => {
        const temp = weather?.main.temp
        const result = temp - 273.15
        return result.toFixed(2)
    }
    console.log(weather);

    return (
        <div className='card-weather'>
            <h1>{weather?.name} - {weather?.sys.country}</h1>
            <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` } alt= 'Weather Icon'/>
            <h2>{temperature ? `${ConvertToCelsius()} ºC` : `${ConvertToFahrenheit()} ºF`}</h2>
            <h3>{weather?.weather[0].description}</h3>
            <div className='card-statistics'>
                <div>
                    <i class="fas fa-cloud"></i>
                    <p>{weather?.clouds.all} %</p>
                    <span>clouds</span>
                </div>
                <div className='stadistics-item'>
                    <i class="fas fa-thermometer-empty"></i>
                    <p>{weather?.main.pressure}</p>
                    <span>pressure</span>
                </div>
                <div>
                    <i class="fas fa-wind"></i>
                    <p>{weather?.wind.speed}</p>
                    <span>wind</span>
                </div>
            </div>
            <button onClick = {() => convertTemperature()}>Cambiar ºC/ºF'</button>

        </div>
    )
}

export default CardWeather