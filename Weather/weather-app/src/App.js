import './App.css';
import React, { useState } from 'react';
import {Searchbar, Info, Background, Quote} from './components';

function App() {
  const [submitValue, setSubmitValue] = useState("Penang");
  const [weatherData, setWeatherData] = useState({ ready: false, coord: {lon: '100.3354', lat: '5.4112'}  });
  const [unit,setUnit] = useState("Metric");
  

  return (
    <div className="App">
      <Searchbar setSubmitValue={setSubmitValue} city={submitValue} setWeatherData={setWeatherData}/>
      <Info city={submitValue} weatherData={weatherData} setUnit={setUnit}/>
      <Quote/>
      <Background city={submitValue}/>

    </div>
  );
}

export default App;
