import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  
  const navigate = useNavigate();
  const navigateLogin = event =>{
    navigate('/login')
  }
  if(user){
    navigate('/home')
  }
  const handleRegister = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);
    createUserWithEmailAndPassword( email, password);
  }
  return (
    <div className='register-form'>
     <h1 className='register'>Register</h1> 
     <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='Your Name' />
        <input type="email" name="email" id="" placeholder='Enter email'/>
        <input type="password" name="password" id="" placeholder='Enter Password'/>
        <input type="submit" value="Register" />
     </form>
     <p>Already have an Account <Link to='/login' className="text-decoration-none" onClick={navigateLogin}>PleaseLogin</Link>  </p>
    <SocialLogin></SocialLogin>
    </div>
  )
}

export default Register