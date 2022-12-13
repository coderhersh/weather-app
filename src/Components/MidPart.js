import CurrentTemp from "./CurrentTemp";
import OtherDetails from "./OtherDetails";
import TimeIcon from "./TimeIcon";

export default function MidPart({curTemp, feelsLike, humidity, windspeed, weatherIcon}) {
    return (
        <div className="flex justify-between">
            <TimeIcon weatherIcon={weatherIcon}/>
            <CurrentTemp curTemp={curTemp}/>
            <OtherDetails feelsLike={feelsLike} humidity={humidity} windspeed={windspeed}/>
        </div>
    );
}
