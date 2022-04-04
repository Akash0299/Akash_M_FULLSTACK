import React from "react";

const UList = (props) =>{ 
    const {data} = props;

    const createList = (MOCKDATA) =>{
        return MOCKDATA.map((value,index) =>{
            return <li key={index}><h3>{value.name}</h3><h4>{value.email}</h4><h4>{value.phone}</h4><h4>{value.city}</h4></li>
        })
    }
    
    return(
       <ul>
           {data && createList(data)}
        </ul> 
    )
}

export default UList;