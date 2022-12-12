import {BsFillSunFill} from "react-icons/bs";

export default function Rise ({sunrise}) {
    return (
        <div className="flex px-1">
            <BsFillSunFill/>
            <h3>{sunrise}</h3>
        </div>
    );
}
