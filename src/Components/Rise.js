import {BsFillSunFill} from "react-icons/bs";

export default function Rise ({sunrise}) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(sunrise * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = date.getMinutes();
    
    return (
        <div className="flex px-1">
            <button><BsFillSunFill/></button>
            <h3 className="pl-1">{hours} : {minutes} {hours > 12 ? 'PM' : 'AM' }</h3>
        </div>
    );
}
