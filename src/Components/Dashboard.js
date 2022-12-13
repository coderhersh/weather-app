import CurrentWeather from "./CurrentWeather";
import Location from "./Location";
import TempAndSun from "./TempAndSun";
import MidPart from "./MidPart";

export default function Dashboard ({curTemp, minTemp, maxTemp, humidity, windspeed, place, countryCode,
    feelsLike, weatherDesc, sunrise, sunset, weatherIcon}) {
    return (
        <div>
            <Location place={place} countryCode={countryCode}/>
            <CurrentWeather weather={weatherDesc}/>
            <MidPart curTemp={curTemp} humidity={humidity} windspeed={windspeed} feelsLike={feelsLike} weatherIcon={weatherIcon}/>
            <TempAndSun sunrise={sunrise} sunset={sunset} minTemp={minTemp} maxTemp={maxTemp}/>
        </div>
    );
}
