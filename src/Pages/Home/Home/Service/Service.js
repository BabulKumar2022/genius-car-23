import React from 'react'
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, description, price}=service;
    const navigate= useNavigate();
    const navigateToServiceDetail = _id =>{
        navigate(`/service/${_id}`)
    }
  return (
    <div className='single-service'>
        <img className='w-100 rounded img-fluid' src={img} alt=""/>
       <h2>{name}</h2>
       <p>Price: ${price}</p> 
       <p> <small>{description}</small></p>
       <button onClick={()=> navigateToServiceDetail(_id)} className='btn'>Book: {name}</button>
    </div>
  )
}

export default Service