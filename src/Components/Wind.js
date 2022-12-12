import {TbWind} from "react-icons/tb";

export default function Wind({windspeed}) {
    return (
        <div className="flex pr-3">
            <button><TbWind size={20} color="white"/></button>
            <p className="font-bold">Wind: {windspeed} km/h</p>
        </div>
    );
}
