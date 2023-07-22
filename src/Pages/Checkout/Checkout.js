import React from 'react';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
    return (
        <div>
            <Helmet><title>Checkout</title> </Helmet>
            <h1 className='checkout-heading'>Checkout</h1>
        </div>
    );
};

export default Checkout;