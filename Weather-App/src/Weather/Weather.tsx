import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import clear from "../assets/clear.png";
import { weatherImageMap } from "../services/Images";
import "./Weather.css";

interface Weather {
  name: string;
  weather: [
    {
      description: string;
      main: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

const Weather = () => {
  const [data, setData] = useState<Weather>();
  const [city, setCity] = useState("");
  const [weatherNow, setWeatherNow] = useState<string>();
  const apikey = "148a6b893506bc1174d213517f244dac";
  const apiurl =
    "https://api.openweathermap.org/data/2.5/weather?units?metric&q=";

  const handleWeather = async () => {
    const res = await axios.post<Weather>(`${apiurl}${city}&appid=${apikey}`);
    console.log(res.data);
    setData(res.data);
    setCity("");
    setWeatherNow(weatherImageMap[res.data.weather[0].main]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Weather App</h2>
          <div className="inputBox">
            <input
              onChange={handleChange}
              value={city}
              type="text"
              className="town"
              placeholder="Enter your City"
            />
            <button onClick={handleWeather}>
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="display">
          <h2>City : {data?.name}</h2>
          <img src={weatherNow} alt="mainImage" />
          <h3>Temperature : {data?.main.temp} °C</h3>
        </div>
        <div className="footer">
          <h3>Humidity : {data?.main.humidity}</h3>
          <h3>Wind Speed : {data?.wind.speed} kmpH</h3>
        </div>
      </div>
    </>
  );
};

export default Weather;
