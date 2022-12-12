import {BsFillSunsetFill} from "react-icons/bs";

export default function Set ({sunset}) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(sunset * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = date.getMinutes();
    return (
        <div className="flex px-1">
            <button><BsFillSunsetFill size={20} color="white"/></button>
            <h3 className="pl-1 font-bold">Sunset: {hours} : {minutes} {hours > 12 ? 'PM' : 'AM'}</h3>
        </div>
    );
}
