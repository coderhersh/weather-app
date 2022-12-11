import { useState, useEffect } from "react";

export default function App() {
  const API = 'faa2ff082ce6b7391d551537ed037a31';
  const [place, setPlace] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  
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
          setHumidity(data["main"]["humidity"]);
          setWindspeed(data["wind"]["speed"]);
        })
        .catch((e) => alert(e))
  }

  const DayOfWeek = (value) => {
    switch (value) {
      case '0':
        return 'Sunday';
      case '1':
        return 'Monday';
      case '2':
        return 'Tuesday';
      case '3':
        return 'Wednesday';
      case '4':
        return 'Thursday';
      case '5':
        return 'Friday';
      case '6':
        return 'Saturday';
    }
  }

  useEffect(() => {
    let currentDate = new Date();
    let cDate = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
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
    
    setMinute(min);
    setHour(hour);
  });

  return (
    <div className="bg-red-500 pt-6">
      <div className="flex justify-center">
        <a className="px-4" href="#">London</a>
        <a className="px-4" href="#">Sydney</a>
        <a className="px-4" href="#">Tokyo</a>
        <a className="px-4" href="#">Toronto</a>
        <a className="px-4" href="#">Paris</a>
      </div>

      <div className="flex justify-center my-5">
        <input type="text"  placeholder="Search" onChange={(e) => setPlace(e.target.value)}
          className="w-60 px-2 py-1.5 outline-none rounded mr-4"
        />
        <button className="bg-blue-600 rounded-md px-3 hover:bg-blue-400" onClick={Search}>Search</button>
        <div className="ml-4">
          <a className="mr-1" href="#">℃</a> |
          <a className="ml-1" href="#">°F</a>
        </div>
      </div>
      
      <div className="flex justify-center">
        <p className="pr-2">{day}, {date} {month} {year} </p>
        |
        <p className="pl-2">Local Time: {hour}:{minute} {TC}</p>
      </div>

      <div className="justify-center">
        <h3>Min Temp: {minTemp} ℃</h3>
        <h3>Max Temp: {maxTemp} ℃</h3>
        <h3>Humidity: {humidity} G.m- 3</h3>
        <h3>Windspeed: {windspeed} km/h</h3>
      </div>

    </div>
  );
}
