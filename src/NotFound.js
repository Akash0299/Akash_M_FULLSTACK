import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <h1>Oops!!!Please return to <Link to="/">home</Link></h1>
    )
}

export default NotFound;