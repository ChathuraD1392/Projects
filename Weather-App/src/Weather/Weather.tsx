import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import clear from "../assets/clear.png";
import humudity from "../assets/humidity.png";
import wind from "../assets/wind.png";
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
  let temp = 0;
  const [data, setData] = useState<Weather>();
  const [city, setCity] = useState("");
  const [weatherNow, setWeatherNow] = useState<string>(clear);
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

  if (data?.main != null) {
    temp = Number((((data.main.temp - 32) * 5) / 9).toFixed(2));
  }
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
          <h3>Temperature : {temp} °C</h3>
        </div>
        <div className="footer">
          <div className="footerOptions">
            <img src={humudity} alt="Humudity" />
            <h3>Humidity : {data?.main.humidity}</h3>
          </div>
          <div className="divider"></div>
          <div className="footerOptions">
            <img src={wind} alt="Wind" />
            <h3>Wind : {data?.wind.speed} kmpH</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
