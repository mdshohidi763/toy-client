import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const allData = useLoaderData()
    console.log(allData);
    const [ details,setDetails] = useState()
    // useEffect(()=>{
    //     fetch(`https://toy-server-rose.vercel.app/allData/${params._id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
   
    return (
        <div>
           
        </div>
    );
};

export default Details;