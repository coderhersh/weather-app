import {BiUpArrowAlt} from "react-icons/bi";

export default function High ({maxTemp}) {
    return (
        <div className="flex px-1">
            <button> <BiUpArrowAlt/> </button>
            <h3>High: {maxTemp}°</h3>
        </div> 
    );
}
