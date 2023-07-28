import React from 'react';
import { Helmet } from 'react-helmet-async';
import {  useNavigate, useParams } from 'react-router-dom';
import ServiceDetailHook from '../../ServiceDetailHook/ServiceDetailHook';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Checkout = () => {
    const navigate = useNavigate();
    const {sId} = useParams();
    const [service] = ServiceDetailHook(sId);
    const[user] = useAuthState(auth);
    // console.log(user)

    //handle submit
    const handlePlaceOrder = event =>{
     
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: sId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        console.log(order)
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast("Your order is Booked")
                event.target.reset();
                navigate(`/orders`)
            }
        })
    }


    return (
        <div className='w-50 mx-auto'>
            <Helmet><title>Checkout/order</title> </Helmet>
            <h1 className='checkout-heading'>Checkout/Order</h1>
            <h3>Order Product Name: {service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='mb-2 w-100' type='text' disabled value={user?.displayName} name='name' placeholder='Name' required/> 
                <input className='mb-2 w-100' type='email' disabled value={user?.email} name='email' placeholder='Email' required/> 
                <input className='mb-2 w-100' type='text' disabled value={service.name} name='product' placeholder='Product Name' required/> 
                <input className='mb-2 w-100' type='text' name='address' placeholder='Address' required/> 
                <input className='mb-2 w-100' type='text' name='phone' placeholder='Phone Number' required/> 
                <input className='btn btn-primary mb-2 mx-auto w-100' type='submit' value='Place Order'  /> <br />
            </form>
        
           <ToastContainer/>
        </div>
    );
};

export default Checkout;