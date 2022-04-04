import React,{useState,useEffect} from "react";
import Heading from "./Heading";
import oven from './oven.jpg';
import ironbox from './ironbox.jpg';
import washingmachine from './washingmachine.jpg';
import ac from './cruiseairconditioner.jpg';
import Images from "./Image";
import CounterHook from "./CounterHook";

const HomeAppDiv={
    backgroundColor: "white",
    minHeight: "10vh",
}
const imgElt1={
    display:"block",
    width:"300px",
    height:"300px",
    padding:"50px"
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
const imgList={
    "oven":oven,
    "ironbox":ironbox,
    "washingmachine":washingmachine,
    "ac":ac
}
const styleList={
    "imgElt1":imgElt1,
    "imgElt2":imgElt2
}
const HomeAppList = ()=>{
    const [hdata,sethData] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/product/homeappliances`)
        .then(response => response.json())
        .then(json => sethData(json))
    },[])
    const createHomeAppList = (hdata) =>{
        return hdata.map(({source,alt,style,heading},index)=>{
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
        return(
            <li key={index}>
               <Images src={valsrc} alt={alt} style={valstyle}/>
                <Heading heading={heading}/>
                <CounterHook bname={heading}/>
            </li>
        )})
    }


    return(
        <div style={HomeAppDiv}>
            <Heading heading="Home Appliances to Check Out" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {hdata && createHomeAppList(hdata)}
            </ul>
        </div>
    )
}

export default HomeAppList;