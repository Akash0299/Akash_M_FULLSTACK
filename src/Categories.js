import React from "react";
import {Link,Outlet} from "react-router-dom";

const Categories = () => {
    return(
        <>
        <h1>Categories</h1>
        <nav>
            <Link to="color">Color</Link>
            <Link to="size">Size</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Categories;