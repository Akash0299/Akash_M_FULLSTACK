import React,{useState,useEffect} from "react";
import Heading from "./Heading";
import shirt from "./shirt.jpg";
import handbags from "./handbags.jpg";
import casualshoes from "./mcasualshoes.jpg"
import smartwatch from "./smartwatch.jpg"
import Images from "./Image";
import CounterHook from "./CounterHook";

const FashionDiv={
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
    "shirt":shirt,
    "handbags":handbags,
    "casualshoes":casualshoes,
    "smartwatch":smartwatch
}
const styleList={
    "imgElt1":imgElt1,
    "imgElt2":imgElt2
}
const FashionAccList = ()=>{
    const [fdata,setfData] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/product/fashionaccessories`)
        .then(response => response.json())
        .then(json => setfData(json))
    },[])
    const createFashionList = (fdata) =>{
        return fdata.map(({source,alt,style,heading},index)=>{
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
        <div style={FashionDiv}>
            <Heading heading="Fashion Accessories to Check Out" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {fdata && createFashionList(fdata)}
            </ul>
        </div>
    )
}

export default FashionAccList;