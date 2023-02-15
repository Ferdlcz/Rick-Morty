import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

export const Episodes = () => {

  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let {air_date, name} = info
  console.log(info)
  var api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() =>{

    (async function () {
      var data = await fetch(api).then(res=>res.json(0))
      setInfo(data)
    })()

  }, [api])

  return (
    <div className='container'>
      <div className='row'>
      <h1 className='text-center mb-4'>
        Episode : 
        {" "}
        <span className='text-primary'>
        {name === ""? "Unknow" : name}
        </span>
      </h1>
      <h5 className='text-center mb-4'>
        Air Date :  {" "}
        <span className='text-primary'>
        {air_date  === ""? "Unknow" : air_date}
        </span>
      </h5>
      </div>
      <div className='row '>
        <div className='col-4'>Pick Episodes</div>
        <div className='col-8'>Cards are here</div>
      </div>
    </div>
  )
}
