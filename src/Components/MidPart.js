import CurrentTemp from "./CurrentTemp";
import OtherDetails from "./OtherDetails";
import TimeIcon from "./TimeIcon";

export default function MidPart({curTemp, feelsLike, humidity, windspeed}) {
    return (
        <div className="flex justify-between">
            <TimeIcon curTemp={13}/>
            <CurrentTemp curTemp={curTemp}/>
            <OtherDetails feelsLike={feelsLike} humidity={humidity} windspeed={windspeed}/>
        </div>
    );
}
