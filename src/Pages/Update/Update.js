import React from 'react';
import {  useParams } from 'react-router-dom';
import ServiceDetailHook from '../../ServiceDetailHook/ServiceDetailHook';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Update = () => {
    
    const {sId} = useParams();
    const [service] = ServiceDetailHook(sId)
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
      console.log(data)
      const proceed = window.confirm("Are you sure?");
      if(proceed){
          const url = `http://localhost:5000/service/${sId}`;
        //   console.log(url)
          fetch(url,{
              method: 'PUT',
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(result =>{
            toast("Product updated successfully");
          
              console.log(result)
          })
      }
  
  }


    return (
        <div className='w-50 mx-auto'>
            <h1 className='service-detail-heading text-center'>update Services: {service.name}</h1>
            <form className='d-flex flex-column p-4 ' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Service Name'  {...register("name")} />
            <textarea className='mb-2' placeholder='Description' {...register("description")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
            <input className='mb-2'  type="submit" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Update;