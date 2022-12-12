import CurrentTemp from "./CurrentTemp";
import OtherDetails from "./OtherDetails";

export default function MidPart({curTemp, feelsLike, humidity, windspeed}) {
    return (
        <div className="flex justify-between">
            <CurrentTemp curTemp={curTemp}/>
            <OtherDetails feelsLike={feelsLike} humidity={humidity} windspeed={windspeed}/>
        </div>
    );
}
