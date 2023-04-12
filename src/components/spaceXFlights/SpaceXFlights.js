import React, {useEffect, useState} from 'react';
import SpaceXFlight from "../spaceXFlight/spaceXFlight";

const SpaceXFlights = () => {
    let [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(value => value.json())
            .then(value => setFlights(value));
    })
    return (
        <>
            {
                flights.filter(flight => flight.launch_year < 2020)
                    .map((flight, index) => <SpaceXFlight
                        key={index}
                        flight={flight}
                    />)
                // хотів key привязати до flight_number, але останні два значення одинакові
                // знаю що ми їх відсікаємо фільтром і все ок, але все одно вважаю що це не правильно
            }
        </>
    );
};

export default SpaceXFlights;