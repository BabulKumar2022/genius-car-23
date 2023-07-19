import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ServiceDetail = ({match}) => {
    const {sId}= useParams();
    // const [singleService, setSingleService] = useState([]);
   
    // useEffect(()=>{
    //   fetch(`http://localhost:3000/service/${match.params.sid}`)
    //   .then(res => res.json())
    //   .then(data => setSingleService(data))
    //   console.log(match)
    // },[])
  return (
    <div>
      <h1 className='service-detail-heading'>ServiceDetail: {sId} </h1> 
      {/* <h2>{singleService.name}</h2> */}
      <div className="">

      </div>
      <Link to="/checkout"><button className='btn btn-primary my-2'>Proceed Checkout</button> </Link>
      </div>
   
  )
}

export default ServiceDetail