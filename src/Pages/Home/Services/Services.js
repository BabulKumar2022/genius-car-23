import React, { useEffect, useState } from 'react'
import Service from '../Home/Service/Service';
import './Services.css'


const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(()=>{
    const uri = 'http://localhost:5000/service';
    console.log(uri)
    fetch(uri)
    .then(res => res.json())
    .then(data => setServices(data)); 
   },[])
  return (
    <div id="services" className='container'> 
  
      <div className="row">
      <h1 className='services-title'>Our Services</h1>
        <div className="services-container">
          {
            services.map(service => <Service key={service._id} service={service}></Service>)
          }
        </div>
      </div>
    </div>
  )
}


export default Services
