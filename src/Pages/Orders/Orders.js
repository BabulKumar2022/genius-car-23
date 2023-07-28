import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getOrders = async() =>{
            const email = user.email
            const url = `http://localhost:5000/orders?email=${email}`;
            try {
                const {data} = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);

            } catch (error) {
                console.log(error)
                if(error.response.status === 401 || error.response.status === 403){
                   signOut(auth);
                    navigate('/login')
                }
              
            }
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