import {TbWind} from "react-icons/tb";

export default function Wind({windspeed}) {
    return (
        <div className="flex pr-3">
            <button><TbWind/></button>
            <p>Wind: {windspeed} km/h</p>
        </div>
    );
}
