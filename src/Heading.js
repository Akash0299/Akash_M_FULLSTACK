import React from "react";
import PropTypes from 'prop-types';

const Heading = ({heading,style}) => {
   return(
        <h1 style={style}>{heading}</h1>
   );
}

Heading.propTypes = {
    heading : PropTypes.string.isRequired,
    style : PropTypes.object
}
export default Heading;