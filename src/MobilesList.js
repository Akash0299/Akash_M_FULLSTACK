import React,{useState,useEffect} from "react";
import Heading from "./Heading";
import f12 from './f12.jpg';
import oneplus from './oneplus.jpg';
import redmi10 from './redmi10.jpg';
import oppof17 from './oppof17.png';
import Images from "./Image";
import CounterHook from "./CounterHook";

const mobilesDiv={
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
    "f12":f12,
    "oneplus":oneplus,
    "oppof17":oppof17,
    "redmi10":redmi10
}
const styleList={
    "imgElt1":imgElt1,
    "imgElt2":imgElt2
}
const MobilesList = ()=>{
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
        return(
            <li key={index}>
               <Images src={valsrc} alt={alt} style={valstyle}/>
                <Heading heading={heading}/>
                <CounterHook bname={heading}/>
            </li>
        )})
    }


    return(
        <div style={mobilesDiv}>
            <Heading heading="Mobiles to Check Out" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {mdata && createMobilesList(mdata)}
            </ul>
        </div>
    )
}

export default MobilesList;