import CurrentWeather from "./CurrentWeather";
import Location from "./Location";
import TempAndSun from "./TempAndSun";

export default function Dashboard ({curTemp, minTemp, maxTemp, humidity, windspeed, place, countryCode,
    feelsLike, weatherDesc, sunrise, sunset}) {
    return (
        <div>
            <Location place = {place} countryCode = {countryCode}/>
            <CurrentWeather weather={weatherDesc}/>
            <h3>{curTemp}</h3>
            <h3>{humidity}</h3>
            <h3>{windspeed}</h3>
            <h3>{feelsLike}</h3>
            <TempAndSun sunrise = {sunrise} sunset = {sunset} minTemp={minTemp} maxTemp={maxTemp}/>
        </div>
    );
}
