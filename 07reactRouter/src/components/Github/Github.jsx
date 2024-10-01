import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()


    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nimesh631')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     },[])
    // })


    return (
        <div className='text-center flex justify-center flex-col items-center bg-gray-600 text-white py-4'>Github Followers:{data.followers}
        <img  className="mt-4 rounded-full " src={data.avatar_url} alt="Git picture" width={150} height={150} />
        </div>
    )
}


export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/nimesh631') 
    return response.json()
}