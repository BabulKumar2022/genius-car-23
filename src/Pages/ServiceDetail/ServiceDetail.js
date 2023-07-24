import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom'
import ServiceDetailHook from '../../ServiceDetailHook/ServiceDetailHook';

const ServiceDetail = () => {
    const {sId} = useParams();
    const [service] = ServiceDetailHook(sId)
  
  return (
    <div>
      <Helmet><title>Service Detail</title> </Helmet>
      <h1 className='service-detail-heading'>Service name: {service.name} </h1> 
      <h1 className='service-detail-heading'>Service Price: {service.price} </h1> 
     <img src={service.img} alt="" />
      {/* <h2>{singleService.name}</h2> */}
      <div className="">

      </div>
      <Link to={`/checkout/${sId}`}><button className='btn btn-primary my-2'>Proceed Checkout</button> </Link>
      </div>
   
  )
}

export default ServiceDetail