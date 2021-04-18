import React from 'react';
import './ServiceMethod.css'
import icon1 from '../../../media/icon1.png';
import icon2 from '../../../media/icon2.png';
import icon3 from '../../../media/icon3.png';
import ServiceMethodDetail from '../ServiceMethodDetail/ServiceMethodDetail';


const ServiceMethod = () => {


    const serviceMethodData = [
        {

            name: 'WE PICK YOUR CLOTHES',
            description: 'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
            icon: icon1,
        },
        {

            name: 'WE PICK YOUR CLOTHES',
            description: 'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
            icon: icon2,
        },
        {

            name: 'WE PICK YOUR CLOTHES',
            description: 'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
            icon: icon3,
        }

    ]










    return (
        <section className="mt-3">
            <div className="text-center">
                <h5 className="text-color">Clean Job Always</h5>
                <h2>This is <span className="text-weight">How we Work</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {

                        serviceMethodData.map(serviceMethod => <ServiceMethodDetail serviceMethod={serviceMethod}></ServiceMethodDetail>)
                    }
                </div>
            </div>



        </section>
    );
};

export default ServiceMethod;