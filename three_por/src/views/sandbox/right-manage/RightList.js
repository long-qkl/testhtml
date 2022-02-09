import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RightList() {
    const locationUrl=useLocation();
    let setUrl=locationUrl.pathname
    console.log(setUrl);
    useEffect(()=>{
        // setInterval(()=>{
            axios.get("http://localhost:8000/rights").then(res=>{
                console.log(res.data);
            })
        // },1000)
        console.log('RightList进来了');
    },[])
    return (
        <div>
            RightList111
        </div>
    )
}
