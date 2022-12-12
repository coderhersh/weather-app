import {BiDownArrowAlt} from "react-icons/bi";

export default function Low ({minTemp}) {
    return (
        <div className="flex px-1">
            <button> <BiDownArrowAlt size={20} color="white"/> </button>
            <h3 className="font-bold">Low: {minTemp}°</h3>
        </div>
    );
}
