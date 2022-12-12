import { useState, useEffect } from "react";
import Dashboard from "./Components/Dashboard";

export default function App() {
  const API = 'faa2ff082ce6b7391d551537ed037a31';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [place, setPlace] = useState(null);
  const [CelciusUnit, setCelciusUnit] = useState(true);
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
          setHumidity(data["main"]["humidity"]);
          setWindspeed(data["wind"]["speed"]);
          setCountryCode(data["sys"]["country"]);
          setFeelsLike(data["main"]["feels_like"]);
          setSunRise(data["sys"]["sunrise"]);
          setSunSet(data["sys"]["sunset"]);
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
    <div className="bg-blue-500 pt-6">
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
          <button className="mr-1">℃</button> |
          <button className="ml-1">°F</button>
        </div>
      </div>
      
      <div className="flex justify-center">
        <p className="pr-2">{day}, {date} {ReturnMonth(month)}, {year} </p>
        |
        <p className="pl-2">Local Time: {hour}:{minute} {TC}</p>
      </div>

      <div className="flex justify-center">
        <Dashboard curTemp = {curTemp} minTemp={minTemp} maxTemp={maxTemp} humidity={humidity} windspeed={windspeed}
         place = {place} countryCode = {countryCode} feelsLike = {feelsLike} sunrise = {sunrise} 
         weatherDesc = {weatherDesc} sunset = {sunset}
        />
      </div>

    </div>
  );
}
