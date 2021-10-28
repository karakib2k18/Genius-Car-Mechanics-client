import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://sleepy-river-40553.herokuapp.com/services`)
        .then(res => res.json())
        .then(data=> setServices(data))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleDelete = id => {
        const url = `https://sleepy-river-40553.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if (data.deletedCount) {
                alert("Successfully deleted one document.");
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
              }
        })
    }

    return (
        <div>
            
            <h1>manage services</h1>
            {
                services.map(service => <div key={service._id}> 
                    <h1>{service._id}</h1>
                    <h1>{service.name}</h1>
                    <button onClick={()=>handleDelete(service._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;