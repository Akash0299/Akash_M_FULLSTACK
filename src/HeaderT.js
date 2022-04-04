import React from 'react';
import Logo from './Logo';
import Heading from './Heading'; 
import Search from './Search';
import Button1 from './Button1';
import Condition from './Condition';
import {NavLink} from 'react-router-dom';
import cart from './cart.png';
import Images from './Image';

const activeStyle = {
  color:'red'  
}

const uname='akash'

const HeaderT = ({handler}) =>{
    return(
    <header className="App-header">
        <div> 
        <Logo />
        <Search />
        <Button1 value="Click Here" handler={handler} tid="btntest"/>
        <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : null }>
          <Heading heading="Home" style={{display:"inline",fontSize:"20px"}}/>
        </NavLink>
        <NavLink to={`/profile/${uname}`} style={({ isActive }) => isActive ? activeStyle : null }>
         <Heading heading="Profile" style={{display:"inline",fontSize:"20px"}}/>
        </NavLink>
        <NavLink to="/aboutus" style={({ isActive }) => isActive ? activeStyle : null }>
          <Heading heading="About Us" style={{display:"inline",fontSize:"20px"}}/>
        </NavLink>
        <NavLink to="/contactus" style={({ isActive }) => isActive ? activeStyle : null }>
          <Heading heading="Contact Us" style={{display:"inline",fontSize:"20px"}}/>
        </NavLink>
        <NavLink to="/viewcart" style={({ isActive }) => isActive ? activeStyle : null }>
          <Images src={cart} style={{width:"5vw",height:"10vh"}} alt="cart"/>
          <span>View Cart</span>
        </NavLink>
        <Condition handler={handler}/>
        </div>
      </header>
    );
}
export default HeaderT;