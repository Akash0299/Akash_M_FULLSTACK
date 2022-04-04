import React,{useState,useEffect} from "react";
import {useParams} from 'react-router-dom'
import UList from './UList'

const Profile = () => {
    const params = useParams();
    const uname = params.uname;
    const [data,setData] = useState();

    useEffect(() =>{
        fetch(`http://localhost:5000/user/${uname}`)
        .then(response => response.json())
        .then(json => setData(json))
    },[])

    return(
        <UList data={data} />
    )
}

export default Profile;