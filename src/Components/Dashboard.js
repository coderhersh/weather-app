import CurrentWeather from "./CurrentWeather";
import Location from "./Location";
import TempAndSun from "./TempAndSun";
import MidPart from "./MidPart";

export default function Dashboard ({curTemp, minTemp, maxTemp, humidity, windspeed, place, countryCode,
    feelsLike, weatherDesc, sunrise, sunset}) {
    return (
        <div>
            <Location place = {place} countryCode = {countryCode}/>
            <CurrentWeather weather={weatherDesc}/>
            <MidPart curTime={curTemp} humidity={humidity} windspeed={windspeed} feelsLike={feelsLike}/>
            <TempAndSun sunrise = {sunrise} sunset = {sunset} minTemp={minTemp} maxTemp={maxTemp}/>
        </div>
    );
}
