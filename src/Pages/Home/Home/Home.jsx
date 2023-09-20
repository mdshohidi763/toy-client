import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../ShopCategory/Category';
import ExtraBanner from '../Banner/ExtraBanner';
import CarBanner from '../Banner/CarBanner';
import { Helmet } from 'react-helmet-async';
import Gallary from '../Gallary/Gallary';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ToY LanD | Home</title>
            </Helmet>
            <Banner></Banner>
            <CarBanner></CarBanner>
            <Category></Category>
            <ExtraBanner></ExtraBanner>
            <Gallary></Gallary>

            
        </div>
    );
};

export default Home;