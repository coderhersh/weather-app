import {BiDownArrowAlt} from "react-icons/bi";

export default function Low ({minTemp}) {
    return (
        <div className="flex px-1">
            <button> <BiDownArrowAlt/> </button>
            <h3>Low: {minTemp}°</h3>
        </div>
    );
}
