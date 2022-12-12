import {BsThermometerHalf} from "react-icons/bs";

export default function RealFelt({feelsLike}) {
    return (
        <div className="flex pr-3">
            <button><BsThermometerHalf size={20} color="white"/></button>
            <p className="font-bold">Real Felt: {feelsLike}°</p>
        </div>
    );
}
