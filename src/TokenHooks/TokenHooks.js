import axios from "axios";
import { useEffect, useState } from "react"

const TokenHooks = user =>{
    const [token, setToken] = useState('');

    useEffect(() =>{
        const getToken = async()=>{
            console.log(user);
            const email = '';
            const {data} = await axios.post('http://localhost:5000/')
            setToken(data.accessToken)
            localStorage.setItem('accessToken', data.accessToken)
    
        }
       getToken()

    },[user])
    return [token]
}
export default TokenHooks;