import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
    return (
        <Hero>
            <Banner title='Your cart is empty' >
                <Link to='/' className="btn-primary ">Return Home</Link>

            </Banner>
        </Hero>
    )
}

export default EmptyCart;
