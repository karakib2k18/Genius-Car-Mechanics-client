import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setServices] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data=> setServices(data))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <h1>NAME: {service.name}</h1>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;