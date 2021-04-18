import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllServices from '../AllServices/AllServices';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css'

const ServiceList = () => {
    const [service, setService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://glacial-spire-45117.herokuapp.com/orderServices?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])


    return (
        <div className='service-from'>
            <div className='row'>
                <div className='sidebar-style'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-11'>
                    {
                        service.map(pd => <AllServices pd={pd}></AllServices>)

                    }
                </div>
            </div >
        </div>
    );
};

export default ServiceList;