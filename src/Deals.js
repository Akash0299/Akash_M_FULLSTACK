import React from "react";
import Heading from "./Heading";
import Images from "./Image";
import f12 from './f12.jpg';
import laptop from './laptop.jpg';

const dealsDiv={
    backgroundColor: "#aebdc3",
    minHeight: "10vh",
}
const liElt={
    display:"inline-block"
}
const imgElt1={
    display:"block",
    width:"300px",
    height:"300px",
    padding:"20px"
}
const imgElt2={
    display:"block",
    width:"300px",
    height:"300px",
    padding:"20px",
    marginLeft:"80px"
}
const hStyle={
    fontSize:"35px",
    color:"green",
}
const divCStyle={
    fontSize:"25px",
    padding:"30px"
}
const headStyle={
    textAlign:"left",
    paddingLeft:"10px",
    paddingTop:"5px"
}
  const zoomImageDims = (e) =>{
    // console.log(e.target.style)
    e.target.style.width="400px"
    e.target.style.height="400px"
  }
  
  const changeImageDims = (e) =>{
    // console.log(e.target.style)
    e.target.style.width="300px"
    e.target.style.height="300px"
  }

const DEALSDATA=[
    {
        heading1:"Great Deal",
        source:f12,
        alt:"f12",
        style:imgElt1,
        heading2:"Samsung F12",
        heading3:"Just Rs.8,749*"
    },
    {
        heading1:"Great Deal",
        source:laptop,
        alt:"laptop",
        style:imgElt2,
        heading2:"Core i5 Laptops",
        heading3:"From Rs.42,490*"
    }
]
const Deals = ()=>{
    const createDealsList = (DEALSDATA) =>{
        return DEALSDATA.map((value,index)=>{
        return(
            <li style={liElt} key={index}>
               <Heading heading={value.heading1} style={hStyle}/>
               <Images src={value.source} alt={value.alt} style={value.style} zoomimg={zoomImageDims} imgchange={changeImageDims}/>
               <div style={divCStyle}>
                  <Heading heading={value.heading2}/>
                  <Heading heading={value.heading3}/> 
               </div>
            </li>
        )})
    }

    return(
        <div style={dealsDiv}>
            <Heading heading="Deals of the day" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {createDealsList(DEALSDATA)}
            </ul>
        </div>
    )
}

export default Deals;