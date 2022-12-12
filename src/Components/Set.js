import {BsFillSunsetFill} from "react-icons/bs";

export default function Set ({sunset}) {
    return (
        <div className="flex px-1">
            <BsFillSunsetFill/>
            <h3>{sunset}</h3>
        </div>
    );
}
