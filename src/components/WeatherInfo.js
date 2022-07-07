import React from 'react'

const WeatherInfo = ({ weatherData }) => {

    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()}: ${new Date(timeStamp * 1000).getMinutes()}`
    }
    const getZero = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()}: ${new Date(timeStamp * 1000).getMinutes()}`
    }
    const sunset = (weatherData?.sys?.sunset)
    const sunrise = (weatherData?.sys?.sunrise)



    return (
        <div className='container'  ><div className='container2' >
                <div className='time'>{getTime(weatherData.dt)}  </div>
                <div className='img-weather'>
                    <img src={`http://openweathermap.org/img/w/${weatherData.weather !==undefined ? weatherData.weather[0].icon : ''}.png`} alt=""/>
                        </div>
                        <div className='city'> {weatherData.name}, {weatherData?.sys?.country}</div>
                        </div>
                    {/* <p>{weatherData?.weather[0].description}</p> */}
                        <div className='container3'>
                        <div className='temp'>Temp: {Math.round(weatherData?.main?.temp)}°C</div>
                        <div className='feels-like'>Feels like {Math.round(weatherData?.main?.feels_like)}°C</div>
                        </div>
                        <div className='sun'>
                        <div className='sunrise'>Sunrise: {getTime(sunrise)}</div>
                        <div className='sunset'>Sunset: {getTime(sunset)}</div>
                        </div>
                        <div className='other'>
                        <p className='wind'>Wind {weatherData?.wind?.speed} m/s</p>
                        <p className='humidity'>Humidity {weatherData?.main?.humidity}%</p>
                        </div>
 </div>
)
}
 export default WeatherInfo