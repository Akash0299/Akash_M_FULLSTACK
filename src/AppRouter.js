import React from 'react';
import { 
    Routes,
    Route
} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
// import Cart from './Cart';
import MobilesList from './MobilesList';
import HomeAppList from './HomeAppList';
import FashionAccList from './FashionList';
import Profile from './Profile';
import ViewCart from './ViewCart';

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="profile/:uname" element={<Profile />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="viewcart" element={<ViewCart />} />
            <Route path="mobiles" element={<MobilesList />} />
            <Route path="homeappliances" element={<HomeAppList />} />
            <Route path="fashionaccessories" element={<FashionAccList />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter;