
export default function Location ({place, countryCode}) {
    return (
        <div className="flex justify-center">
            <p>{place},</p>
            <p className="pl-1">{countryCode}</p>
        </div>
    );
}
