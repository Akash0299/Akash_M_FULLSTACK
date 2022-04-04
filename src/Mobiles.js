import React,{useState,useEffect} from "react";
import Heading from "./Heading";
import f12 from './f12.jpg';
import {Link} from "react-router-dom"
import oneplus from './oneplus.jpg';
import Images from "./Image";
import CounterHook from "./CounterHook";

const mobilesDiv={
    backgroundColor: "white",
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
    padding:"20px"
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

const imgList={
    "f12":f12,
    "oneplus":oneplus
}
const styleList={
    "imgElt1":imgElt1,
    "imgElt2":imgElt2
}
const Mobiles = ()=>{
    const [mdata,setmData] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/product/mobiles`)
        .then(response => response.json())
        .then(json => setmData(json))
    },[])
    const createMobilesList = (mdata) =>{
        return mdata.map(({source,alt,style,heading},index)=>{
        let valsrc=source;
        for(var x in imgList){
            if(x === source){
                valsrc=imgList[x];
            }
        }
        let valstyle=style;
        for(var y in styleList){
            if(y === style){
                valstyle=styleList[y];
            }
        }
        if(index>2)
        return(<li></li>)
        else
        return(
            <li key={index} style={liElt}>
               <Images src={valsrc} alt={alt} style={valstyle}/>
                <Heading heading={heading}/>
                <CounterHook bname={heading}/>
            </li>
        )})
    }


    return(
        <div style={mobilesDiv}>
            <Heading heading="Mobiles to Check Out" style={headStyle}/>
            <Link to="/mobiles"><button style={{float:"right",marginTop:"20px",marginRight:"20px",fontSize:"30px"}}>View All</button></Link>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {mdata && createMobilesList(mdata)}
            </ul>
        </div>
    )
}

export default Mobiles;