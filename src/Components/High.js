import {BiUpArrowAlt} from "react-icons/bi";

export default function High ({maxTemp}) {
    return (
        <div className="flex px-1">
            <button> <BiUpArrowAlt size={20} color="white"/> </button>
            <h3 className="font-bold">High: {maxTemp}°</h3>
        </div> 
    );
}
