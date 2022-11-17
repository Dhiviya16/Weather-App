import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react';

const Searchbar = ({setSubmitValue, city, setWeatherData}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        function handleResponse(response) {
            setWeatherData({
              ready: true,
              temperature: Math.round(response.data.main.temp),
              humidity: response.data.main.humidity,
              feelsLike: Math.round(response.data.main.feels_like),
              wind: Math.round(response.data.wind.speed),
              city: response.data.name,
              icon: response.data.weather[0].icon,
              description: response.data.weather[0].description,
            });
          }

        const handleCityQuery = async () => {
            const apiKey =  `89900ac40e83420b0aa6ad3555f73a4e`
            let units = "metric";
         
            try{
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        
            const response = await axios.get(apiUrl);
            handleResponse(response);
            }
            catch(error){
                alert ("Sorry, no places were found. Please try again");
                window.location.reload(false);
            }
        }

        handleCityQuery(city);
    }, [city, setWeatherData]);

  
    function handleInput(e) {
        const newValue = e.target.value;
        setInputValue(newValue);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitValue(inputValue)
        setInputValue("");
    };


    return ( <>
        <form onSubmit={handleSubmit}>
         <input type="text" onChange={handleInput} value={inputValue}/>
         <button type="submit"> Search </button>
       </form>
    </> 
    );
}
 
export default Searchbar;
