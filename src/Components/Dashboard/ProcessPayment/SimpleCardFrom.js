import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const SimpleCardFrom = () => {
    return (
        <form className='mb-4'>
            <CardElement />
        </form>
    );
};

export default SimpleCardFrom;