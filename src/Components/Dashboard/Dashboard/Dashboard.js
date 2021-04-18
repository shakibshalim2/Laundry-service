import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div className='row bg-color'>

            <div className="col-md-2 sidebar">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Dashboard;