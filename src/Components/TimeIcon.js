import {BsFillCircleFill} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";

export default function TimeIcon ({time}) {
    return (
        <div className="pl-4">
            {
                (true) ? <BsFillCircleFill size={60} color="yellow"/> : 
                <BsFillMoonFill color="gray" size={60}/>
            }
        </div>
    );
}
