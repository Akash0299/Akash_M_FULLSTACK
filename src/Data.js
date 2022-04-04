import React,{useEffect,useState} from "react";
import List from './List'

const Data = () => {
    const [data,setData] = useState();
    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setData(json))
    },[])

    return(
        <List data={data} />
    )
};

export default Data;