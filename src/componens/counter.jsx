"use client"

import React from "react"

const Counter =(props)=>{
    // State
const [data,setdata] = React.useState(0)
//Untuk Menghitung
const handleClick = ()=>{
setdata(data+1)
}
    
    return(
        <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-3xl">
        mesin {props.title}<span className="text-red-500">{data}</span>
      </h1>
       <button onClick={handleClick}
       className="bg-blue-600 cursor-pointer text-white py-2 px-5 rounded-3xl font-bold">Klik In This</button>
    </div>
    )
}

export default Counter;