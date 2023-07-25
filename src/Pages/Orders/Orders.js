import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const getOrders = async() =>{
            const email = user.email
            const url = `http://localhost:5000/orders?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data)
        }
        getOrders();
    },[user])
  
    return (
        <div>
            <h1 className='service-detail-heading text-center'>All Orders:{orders.length}</h1>
        <div className="w-75 mx-auto" style={{width: "auto"}}>
            <table style={{width:1000}}>
            <thead>
                <tr>
                <th>Product Id</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Phone</th>
                </tr>
            </thead>
            {
                 orders.map(order =>
                <tbody key={order._id}>
                    <tr >
                        <td>{order.serviceId} </td>
                        <td>{order.email} </td> 
                        <td>{order.service} </td> 
                        <td>{order.phone} </td> 
                    </tr>
                </tbody>)
            }
            </table>
        
      </div>
        </div>
    );
};

export default Orders;