import {BiDroplet} from "react-icons/bi";

export default function Humidity({humidity}) {
    return (
        <div className="flex pr-3">
            <button><BiDroplet/></button>
            <p>Humidity: {humidity} %</p>
        </div>
    );
}
