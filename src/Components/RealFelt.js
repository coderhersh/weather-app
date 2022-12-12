import {BsThermometerHalf} from "react-icons/bs";

export default function RealFelt({feelsLike}) {
    return (
        <div className="flex pr-3">
            <button><BsThermometerHalf/></button>
            <p>Real Felt: {feelsLike}°</p>
        </div>
    );
}
