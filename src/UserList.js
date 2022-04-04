import React from "react";
import logo from './logo.svg';

const MOCKDATA=[
    {'name':'Akash','id':123,'dept':'IT','profileImage':logo},
    {'name':'Satwika','id':456,'dept':'IT','profileImage':logo},
    {'name':'Abhi','id':980,'dept':'IT','profileImage':logo
}
]

const UserList = () =>{
    const createList = (MOCKDATA) =>{
        return MOCKDATA.map((value,index) =>{
            return <li key={index}><img src={value.profileImage} style={{width:'100px',height:'100px'}}/><h3>{value.name}</h3><h4>{value.id}</h4><span>{value.dept}</span></li>
        }
    ) 
  }
  
  return(
     <ul>
         {createList(MOCKDATA)}
     </ul> 
    )
}

export default UserList;