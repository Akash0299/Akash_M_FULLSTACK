import React from "react";
import Heading from "./Heading";
import Images from "./Image";
import {Link} from 'react-router-dom';
const NAVDATA=[ 
    {
        ahref:"/mobiles",
        atarget:"_blank",
        imgclass:"imgl", 
        alt:"mobiles",
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRn0oqQvtK9qwJfYsC8mDfi3LJRWO-UHOczg&usqp=CAU",
        heading:"Mobiles" 
    },
    {
        ahref:"/homeappliances",
        atarget:"_blank",
        imgclass:"imgl",
        alt:"home appliances",
        source:"https://upload.wikimedia.org/wikipedia/commons/6/67/Breville.jpg",
        heading:"Home Appliances"
    },
    {
        ahref:"/fashionaccessories",
        atarget:"_blank",
        imgclass:"imgl",
        alt:"fashion",
        source:'https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-bow-tie-wallet-wooden-background-watch-sunglasses-bag-hat-belt-shoes-wood-table_1921-94.jpg?size=626&ext=jpg',
        heading:"Fashion Accessories"
    }
]

const Nav = () => {
    const createNavList = (NAVDATA) =>{
        return NAVDATA.map((value,index)=>{
            return(
            <li key={index}>
                <Link to={value.ahref}>
                    <Images className={value.imgclass} alt={value.alt} src={value.source} style={{display:"block"}}/>
                    <Heading heading={value.heading} />
                </Link>
            </li>
            )
        })
    }
    return(
      <nav className="App-nav">
          <ul>
              {createNavList(NAVDATA)}
          </ul>
        </nav> 
    )
}

export default Nav;