import React, {useState} from "react"
import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import './App.css'




export default function  App(){
    const [weatherData, setWeatherData] = useState({})
    const [cityName, setCityName] = useState('')
    const [errorMsg, setErrorMsg] = useState(false)


    const api_key = '053d8c76f6f4a9d1a1c372fd39214652'
    const getData = (e) =>{
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`)
    .then((({data})=> { setWeatherData({...weatherData,...data})}))
            .catch((err)=>{
                setErrorMsg(err.message)
                console.log(err.message);
                setWeatherData('')
            })
        setCityName('')
        setErrorMsg('')

    }
    const inputHandler =(e) =>{
        setCityName(e.target.value)
    }

    return (
        <div className='container_1'>
            <form onSubmit={getData} className='form'>
                <input type ="text" placeholder='Search city' onChange={inputHandler} value ={cityName} className='input' required/>
                <button type= 'submit' className='btn1'>Search city</button>
            </form>
            {Object.keys(weatherData).length === 0 ? errorMsg ? <p>{errorMsg}</p> : null : <WeatherInfo weatherData = {weatherData}/> }
        </div>
    )

}