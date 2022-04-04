import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import List from './List'

const UserDescription = () => {
    const params = useParams();
    const uid = params.userid;
    const [userData,setUser] = useState();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
         .then(response => response.json())
         .then(json => console.log(json))
    },[])

    return(
        <>
        <h1>User Description {uid}</h1>
        </>
    )
}

export default UserDescription;