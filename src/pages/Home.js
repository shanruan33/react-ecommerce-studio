import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'; 
import StyledHero from '../components/StyledHero';

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner title='Flow &amp; Wellness Studio' subtitle='Lift your spirit. Build your body. Relax your mind.
'>
                    <Link to='/classes' className="btn-primary ">check our classes</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            
        </>

    )
}

export default Home;
