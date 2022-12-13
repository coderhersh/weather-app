const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default function TimeIcon ({weatherIcon}) {
    return (
        <div className="pl-4">
            <img src={iconUrlFromCode(weatherIcon)} alt="" className="w-20"/>
        </div>
    );
}
