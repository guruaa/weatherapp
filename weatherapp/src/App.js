import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherinfo,setWeatherinfo]=useState('')

  const handleSubmit= async (event)=>
  { 
      event.preventDefault();
      fetch(`/api/cities?city=${city}`)
      .then(res => res.json())
      .then(info => setWeatherinfo(info))
  }

  const handleChange = (event)=>
  {
    setWeatherinfo('');
    setCity(event.target.value);
  }

  return (
    <div>
      <br/><br/>
      <form onSubmit={handleSubmit.bind(this)}>
        <p>Please select a City to check the weather</p>
        <select value={city} onChange={handleChange.bind(this)} id="cities">
          <option value="">Select a city</option>
          <option value="California">California</option>
          <option value="SunnyValle">SunnyValle</option>
          <option value="Chicago">Chicago</option>
        </select>
        <br/><br/>
        <input type="submit" value="Select City" />
      </form>
      <div>
        <p>{weatherinfo? 'City: ' + city : ''}</p>
        <p>{weatherinfo? 'Country: ' + weatherinfo.location.country : ''}</p>
        <p>{weatherinfo? 'Humidity: ' + weatherinfo.current_observation.atmosphere.humidity : ''}</p>
        <p>{weatherinfo? 'Condition: ' + weatherinfo.current_observation.condition.text : ''}</p>
        <p>{weatherinfo? 'Temperature: ' + weatherinfo.current_observation.condition.temperature : ''}</p>
      </div>
      
    </div>
  );
}

export default App;
