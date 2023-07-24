import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


const ServiceDetailHook = (sId) => {
    // const params = useParams();
    // const serviceId = params.sId;
    const [service, setService] = useState({});
    // console.log(params)

   useEffect(()=>{
    const uri = `http://localhost:5000/service/${sId}`;
    console.log(uri)
    fetch(uri)
    .then(res => res.json())
    .then(data => setService(data)); 

   },[sId])
   return [service]
};

export default ServiceDetailHook;