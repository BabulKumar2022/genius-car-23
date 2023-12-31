
import { useEffect, useState } from "react";


const ServiceHooks = () =>{
    const [services, setServices] = useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/service')
     .then(res => res.json())
     .then(data => setServices(data)); 
    },[])
    return [services, setServices]
}
export default ServiceHooks
