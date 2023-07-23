import React from 'react';
import ServiceHooks from '../../ServiceHoks/ServiceHoks';
import { Helmet } from 'react-helmet-async';

const Manege = () => {
    const [services, setServices] = ServiceHooks();
    const handleDelete = id =>{
        const proceed = window.confirm("Are you sure?");
        if(proceed){
const url = `http://localhost:5000/service/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = services.filter(service=> service._id !==id)
                setServices(remaining)
            })
        }
    }
  
    return (
        <div>
            <Helmet><title>Manege Service </title> </Helmet>
            <h1 className='service-detail-heading text-center'>Mange Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}<button onClick={()=> handleDelete(service._id)}>X</button> </h4>
                </div>)
            }
        </div>
    );
};

export default Manege;