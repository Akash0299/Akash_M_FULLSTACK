import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Carousal from './Carousal';
import Deals from './Deals';
import Mobiles from './Mobiles';

const Home = () => {
    return(
        <>
       <Nav />
       <Banner /> 
       <Carousal /> 
       <Deals />
       <Mobiles/>
        </>
    )
}

export default Home;