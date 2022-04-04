import React from "react";
import Heading from "./Heading";

const NewsClick = ({eventOne,eventTwo}) => {
    return(
    <>
      <Heading heading="SUBSCRIBE NEWSLETTER"/>
      <input type="text" placeholder="Enter here" id="txt" onChange={(e) => eventTwo(e)}/>
      <button onClick={(e)=>eventOne(e)}>SUBMIT</button>
    </>
    )
}

export default NewsClick;