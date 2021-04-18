import React, { useEffect, useState } from 'react';
import './Services.css'
import dryCleaning from '../../../media/dry-cleaning.jpg';
import laundryServices from '../../../media/laundry-services.jpg';
import washFold from '../../../media/wash-fold.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [service, setService] = useState([])
    console.log(service);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <section>
            <div className='text-center mt-5'>
                <h5 style={{ color: 'orange' }} className=''>.........  OUR SERVICES  ........</h5>
                <h1 className='service-text mb-5'>Our Best Services For You</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row'>


                    {
                        service.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)

                    }

                </div>
            </div>

        </section>
    );
};

export default Services;