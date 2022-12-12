import Rise from "./Rise";
import Set from "./Set";
import High from "./High";
import Low from "./Low";

export default function TempAndSun ({sunrise, sunset, minTemp, maxTemp}) {
    return (
        <div className="flex px-1">
            <Rise sunrise={sunrise}/>
            <Set sunset={sunset}/>
            <High maxTemp={maxTemp}/>
            <Low minTemp={minTemp}/>
        </div>
    );
}
