import { useState, useEffect } from "react";
import Dashboard from "./Components/Dashboard";

export default function App() {
  const API = 'faa2ff082ce6b7391d551537ed037a31';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [place, setPlace] = useState(null);
  const [celciusUnit, setCelciusUnit] = useState(true);
  const [countryCode, setCountryCode] = useState(null);
  const [curTemp, setCurTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [weatherDesc, SetWeatherDesc] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [sunrise, setSunRise] = useState(null);
  const [sunset, setSunSet] = useState(null);
  const [timezone, setTimeZone] = useState(null);
  
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [TC, setTC] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  
  const Search = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(place);
          console.log(data);
          setMinTemp(Math.round(parseInt(data["main"]["temp_min"]) - 273.15));
          setMaxTemp(Math.round(parseInt(data["main"]["temp_max"]) - 273.15));
          setCurTemp(Math.round(parseInt(data["main"]["temp"]) - 273.15));
          setFeelsLike(Math.round(parseInt(data["main"]["feels_like"]) - 273.15));
          setHumidity(data["main"]["humidity"]);
          setWindspeed(data["wind"]["speed"]);
          setCountryCode(data["sys"]["country"]);
          setSunRise(new Date((data.sys.sunrise + data.timezone) * 1000));
          setSunSet(new Date((data.sys.sunset + data.timezone) * 1000));
          setTimeZone(new Date((data.timezone) * 1000));
          SetWeatherDesc(data["weather"]["0"]["description"]);
        })
        .catch((e) => alert(e))
  }

  const DayOfWeek = (value) => {
    return days[value];
  }

  const ReturnMonth = (value) => {
    return months[value];
  }

  const ConvertToFahrenheit = () => {
    setMinTemp(Math.round((9/5) * minTemp + 32));
    setMaxTemp(Math.round((9/5) * maxTemp + 32));
    setCurTemp(Math.round((9/5) * curTemp + 32));
    setFeelsLike(Math.round((9/5) * feelsLike + 32));
  }

  const ConvertToCelcius = () => {
    setMinTemp(Math.round((minTemp - 32) * (5/9)));
    setMaxTemp(Math.round((maxTemp - 32) * (5/9)));
    setCurTemp(Math.round((curTemp - 32) * (5/9)));
    setFeelsLike(Math.round((feelsLike - 32) * (5/9)));
  }

  useEffect(() => {
    let currentDate = new Date();
    let cDate = currentDate.getDate();
    let cMonth = currentDate.getMonth();
    let cYear = currentDate.getFullYear();
    let cday = currentDate.getDay();
    
    setDate(cDate);
    setMonth(cMonth);
    setYear(cYear);
    setDay(DayOfWeek(cday));
    
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    
    if (hour > 12) {
      setTC('PM');
    } else {
      setTC('AM');
    }
    
    if (min < 10) {
      setMinute('0' + min);
    } else {
      setMinute(min);
    }

    if (hour < 10) {
      setHour('0' + hour);
    } else {
      setHour(hour);
    }
  });

  return (
    <div className="bg-blue-500 pt-6 h-screen">
      <div className="flex justify-center">
        <button className="px-4" onClick={() => {setPlace('London'); Search();}}>London</button>
        <button className="px-4" onClick={() => {setPlace('Sydney'); Search();}}>Sydney</button>
        <button className="px-4" onClick={() => {setPlace('Tokyo'); Search();}}>Tokyo</button>
        <button className="px-4" onClick={() => {setPlace('Toronto'); Search();}}>Toronto</button>
        <button className="px-4" onClick={() => {setPlace('Paris'); Search();}}>Paris</button>
      </div>

      <div className="flex justify-center my-5">
        <input type="text" placeholder="Search" onChange={(e) => setPlace(e.target.value)}
          className="w-60 px-2 py-1.5 outline-none rounded mr-4"
        />
        <button className="bg-blue-600 rounded-md px-3 hover:bg-blue-800" onClick={Search}>Search</button>
        <div className="ml-4">
          <button className={celciusUnit ? 'mr-1 text-white' : 'mr-1'} onClick={(e) => {
            setCelciusUnit(true);
            ConvertToCelcius();
          }}>℃</button> |
          <button className={celciusUnit ? 'ml-1' : 'ml-1 text-white'} onClick={(e) => {
            setCelciusUnit(false);
            ConvertToFahrenheit();
          }}>°F</button>
        </div>
      </div>
      
      <div className="flex justify-center text-gray-100 text-lg my-3">
        <p className="pr-2">{day}, {date} {ReturnMonth(month)}, {year} </p>
        |
        <p className="pl-2">Local Time: {hour}:{minute} {TC}</p>
      </div>

      <div className="flex justify-center">
        <Dashboard curTemp={curTemp} minTemp={minTemp} maxTemp={maxTemp} humidity={humidity} windspeed={windspeed}
         place = {place} countryCode = {countryCode} feelsLike = {feelsLike} sunrise = {sunrise} 
         weatherDesc = {weatherDesc} sunset = {sunset}
        />
      </div>

    </div>
  );
}
