const axios = require('axios')
const Weather = require('./models/weatherModel');
require("dotenv").config();

var city;
var temperature;
var wind;
var humidity;
var feelsLike;

const City= "Thailand";
const apiKey = process.env.WEATHER_API_KEY
let units = "metric";


const querystr = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=${units}`;


axios.get(querystr).then((response) =>{
    city= response.data.name,
    temperature= Math.round(response.data.main.temp),
    wind= Math.round(response.data.wind.speed),
    humidity= response.data.main.humidity,
    feelsLike= Math.round(response.data.main.feels_like),
    
    console.log(city)
    console.log(temperature  + "°C")
    console.log(wind  + "MPH")
    console.log(humidity  + "%")
    console.log(feelsLike  + "°C")

    

    newWeather = new Weather ({
        city:city,
        temperature:temperature,
        wind: wind,
        humidity: humidity,
        feelsLike: feelsLike
    
    });
    
    newWeather
    .save()
    .then(result=>{
        console.log("Success" + result);
    })
    .catch(error => {
        console.log("Error" +error);
    });


});
