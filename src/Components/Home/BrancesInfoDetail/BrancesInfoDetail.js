import React from 'react';
import './BrancesInfoDetail.css'
const BrancesInfoDetail = ({ brances }) => {
    return (

        <div className='col-md-4 '>
            <div className='card-style'>
                <div className='image-txt-container mb-4 d-flex p-3'>
                    <img style={{ width: '50%' }} src={brances.img} alt="" />
                    <div className='ms-4 card-text'>
                        <p className='brances-name'>{brances.name}</p>

                        <p className='location'>45/T2 AB, (Nueva Palomino), Arequipa, Peru</p>
                        <p className='cell'> Cell: +99 888 555 22 2</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default BrancesInfoDetail;