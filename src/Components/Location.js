
export default function Location ({place, countryCode}) {
    return (
        <div className="flex justify-center py-5 text-white text-4xl font-bold">
            <p>{place},</p>
            <p className="pl-1">{countryCode}</p>
        </div>
    );
}
