import { useState, useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import WeatherIcon from '../WeatherIcon';

const Info = ({city, weatherData, setUnit}) => {

   
    const [cityTemp, setCityTemp] = useState(weatherData.temperature)
    const [cityWind, setCityWind] = useState(weatherData.wind)
    const [cityHumidity, setCityHumidity] = useState(weatherData.humidity)
    const [cityFeelsLike, setCityFeelsLike] = useState(weatherData.feelsLike)


    useEffect(() => {
        setCityTemp(weatherData.temperature)
        setCityWind(weatherData.wind)
        setCityHumidity(weatherData.humidity)
        setCityFeelsLike(weatherData.feelsLike)
        
    }, [weatherData]);

    const showCelsius = (e) => {
        e.preventDefault();
        setUnit("Metric");
        setCityTemp(weatherData.temperature);
    }

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      if (weatherData.ready !== false) {
    return ( 

    <div className="info">
        <p className="city">{city}</p>
        <div className="temp-container">
        <span className="temp">{cityTemp}</span>
        <span className="degrees">{showCelsius}°C </span>
        <div className="descContainer"></div>
        <WeatherIcon code={weatherData.icon} size={100}/>
        <p className="desc">{weatherData.description}</p>
        </div>

        <div className="bottom">
        <div className="wind">
        <p1 className='bold'>{cityWind} MPH</p1>
        <p>Wind Speed</p>
        </div>

        <div className="humidity">
        <p1 className='bold'>{cityHumidity}%</p1>
        <p>Humidity</p>
        </div>

        <div className="feelsLike">
        <p1 className='bold'>{cityFeelsLike}°C</p1>
        <p>Feels Like</p>
        </div>

        </div>

    </div> );
      } else {
        return <BounceLoader loading={true} color={"#ffffff"} cssOverride={override}/>
      }
}
 
export default Info;
