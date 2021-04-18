import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../Dashboard/ProcessPayment/ProcessPayment';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './BookAService.css'
const BookAService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const handleService = () => {
        const newService = { ...loggedInUser, ...service }
        delete newService._id
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newService)

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className='container cart-item'>
            <div className='row'>
                <div className='col-md-6 sidebar-style'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-6 service-page'>
                    <p className='name-bg'>{loggedInUser.name}</p>
                    <br />
                    <p className='name-bg'>{loggedInUser.email}</p>
                    <br />
                    <p className='name-bg'>{service.name}</p>
                    <br />
                    <p>service charge   -- <span className='ms-5'>{service.price}</span></p>


                    <form>
                        <small className='me-5'>pay with</small>
                        <select name="payment" className='payment-style'>
                            <option value="volvo">paypal</option>
                            <option value="saab">card</option>
                        </select>
                    </form>

                    <ProcessPayment></ProcessPayment>
                    <div className="btn">
                        <Link to="/dashboard/serviceList" onClick={handleService} className=" btn-sm pay-btn">Get The Service</Link>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default BookAService;