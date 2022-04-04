import React from "react";import PropTypes from 'prop-types';

const Images = ({src,alt,style,className,zoomimg,imgchange}) =>{
    return(
      <img src={src} alt={alt} style={style} className={className} onMouseEnter={(e)=>zoomimg(e)} onMouseLeave={(e)=>imgchange(e)}/> 
      )
    }

Images.propTypes = { 
    src : PropTypes.string.isRequired, 
    alt : PropTypes.string.isRequired,
    className : PropTypes.string,
    style : PropTypes.object
} 

export default Images;