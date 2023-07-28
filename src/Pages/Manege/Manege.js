import React from 'react';
import ServiceHooks from '../../ServiceHoks/ServiceHoks';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Manege.css'

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
            <h1 className='service-detail-heading text-center'>Manageable Services:{" "}{services.length}</h1>
            <div className="w-75 mx-auto " style={{width: "auto"}}>
                <table style={{width:1000}}>
                    <thead >
                        <tr>
                        <th >Product Name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        services.map(service => <tbody key={service._id}>
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td>
                                    <Link to={`/update/${service._id}`}>
                                        <button className='mx-2 text-primary'>Update</button>
                                    </Link> 
                                </td>
                                <td>
                                    <button className='text-danger' onClick={()=> handleDelete(service._id)}>X</button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                 </table>
            </div>
        </div>
    );
};

export default Manege;