import Rise from "./Rise";
import Set from "./Set";
import High from "./High";
import Low from "./Low";

export default function TempAndSun ({sunrise, sunset, minTemp, maxTemp}) {
    return (
        <div className="flex py-6 text-white">
            <Rise className="py-1 px-3" sunrise={sunrise}/> | 
            <Set className="py-1 px-3" sunset={sunset}/> | 
            <High className="py-1 px-3" maxTemp={maxTemp}/> | 
            <Low className="py-1 px-3" minTemp={minTemp}/>
        </div>
    );
}
