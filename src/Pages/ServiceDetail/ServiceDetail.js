import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
   
    useEffect(()=>{
      const uri = `http://localhost:5000/service/${serviceId}`;
      fetch(uri)
      .then(res => res.json())
      .then(data => setService(data))
    
      
    },[])
  return (
    <div>
      <Helmet><title>Service Detail</title> </Helmet>
      <h1 className='service-detail-heading'>Service name: {service.name} </h1> 
      <h1 className='service-detail-heading'>Service Price: {service.price} </h1> 
     <img src={service.img} alt="" srcset="" />
      {/* <h2>{singleService.name}</h2> */}
      <div className="">

      </div>
      <Link to="/checkout"><button className='btn btn-primary my-2'>Proceed Checkout</button> </Link>
      </div>
   
  )
}

export default ServiceDetail