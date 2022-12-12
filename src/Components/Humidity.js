import {BiDroplet} from "react-icons/bi";

export default function Humidity({humidity}) {
    return (
        <div className="flex pr-3">
            <button><BiDroplet size={20} color="white"/></button>
            <p className="font-bold">Humidity: {humidity} %</p>
        </div>
    );
}
