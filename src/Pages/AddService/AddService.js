import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"

const AddService = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const proceed = window.confirm("Are you sure?");
    if(proceed){
        const url = 'http://localhost:5000/service';
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }

}
    return (
        <div className='w-50 mx-auto'>
            <Helmet><title>Add Service </title> </Helmet>
            <h1 className='service-detail-heading'>Add a service</h1>

            <form className='d-flex flex-column p-4 ' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Service Name' {...register("name")} />
            <textarea className='mb-2' placeholder='Description' {...register("description")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
            <input className='mb-2'  type="submit" />
            </form>
        </div>
    );
};

export default AddService;