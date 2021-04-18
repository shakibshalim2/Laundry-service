import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllServices from '../AllServices/AllServices';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css'

const ServiceList = () => {
    const [service, setService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:5000/orderServices?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])


    return (
        <div className='container'>
            <div className='row'>
                <div className='sidebar-style sidebar'>
                    <Sidebar></Sidebar>
                </div>
                <div className='service-page-style'>
                    {
                        service.map(pd => <AllServices pd={pd}></AllServices>)

                    }
                </div>
            </div >
        </div>
    );
};

export default ServiceList;