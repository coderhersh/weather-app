
export default function CurrentWeather ({weather}) {
    return (
        <div className="flex justify-center py-6 my-2 font-sans font-semibold text-sky-200 text-3xl">
            <p>{weather ? weather : ''}</p>
        </div>
    );
}
