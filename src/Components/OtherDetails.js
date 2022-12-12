import Humidity from './Humidity';
import RealFelt from './RealFelt';
import Wind from './Wind';

export default function OtherDetails({feelsLike, humidity, windspeed}) {
    return (
        <div className="flex-col">
            <RealFelt feelsLike={feelsLike}/>
            <Humidity humidity={humidity}/>
            <Wind windspeed={windspeed}/>
        </div>
    );
}
