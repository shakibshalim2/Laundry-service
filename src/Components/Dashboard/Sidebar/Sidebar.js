import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';



const Sidebar = () => {

    return (
        <div>
            <div className='sidebar'>
                <Link className='active' to='/dashboard/service'>service</Link>
                <Link to='/dashboard/serviceList'>Your Order List</Link>
                <Link to='/dashboard/review'>Review Our Site</Link>
                <Link to='/dashboard/addService'>Add a Service</Link>
                <Link to='/'>Home</Link>
            </div>

        </div>
    );
};

export default Sidebar;