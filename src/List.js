import React from "react";

//const MOCKDATA=['apple','mango','grapes','pineapple']

const List = (props) =>{ 
    const {data} = props;
    const createList = (data) =>{
         return data.map((value,index) =>{
              return <li key={index}><h3>{value.pname}</h3><h4>{value.count}</h4></li>
             } 
        ) 
    }
    
    return(
       <ul>
           {data && createList(data)}
        </ul> 
    )
}

export default List;