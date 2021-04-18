import React from 'react';
import map from '../../../media/map.png';
import BrancesInfoDetail from '../BrancesInfoDetail/BrancesInfoDetail';
import './Brances.css'

const brancesInfo = [
    {
        img: map,
        name: 'AREQUIPA, PERU'

    },
    {
        img: map,
        name: 'ASHEVILLE, NORTH CAROLINA'

    },
    {
        img: map,
        name: 'EAST CAPE, MEXICO'

    },
    {
        img: map,
        name: 'BEIJING, CHINA'

    },
    {
        img: map,
        name: 'BRISBANE, AUSTRALIA'

    },
    {
        img: map,
        name: 'CAESAREA, ISRAEL'

    }
]
const Brances = () => {
    return (
        <section className="mt-3">
            <div className="text-center">
                <h5 className="office-text">Startap Office</h5>
                <h2 className='outlets-text'>OUR OUTLETS</h2>
            </div>
            <div className="container justify-content-center">
                <div className="row mt-5">
                    {

                        brancesInfo.map(brances => <BrancesInfoDetail brances={brances}></BrancesInfoDetail>)
                    }
                </div>
            </div>



        </section>
    );
};

export default Brances;