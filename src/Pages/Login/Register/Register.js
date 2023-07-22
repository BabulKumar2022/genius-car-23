import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';


const Register = () => {
  const [agree, setAgree] = useState(false)
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  
  const navigate = useNavigate();
  const navigateLogin = event =>{
    navigate('/login')
  }
  if(user){
    console.log(user)
  }
  const handleRegister = async(event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);
  
     await createUserWithEmailAndPassword( email, password);
     await updateProfile({displayName: name});
    console.log('update profile')
     navigate('/home')

  }
  return (
    <div className='register-form'>
      <Helmet><title>Register</title> </Helmet>
     <h1 className='register'>Register</h1> 
     <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='Your Name' />
        <input type="email" name="email" id="" placeholder='Enter email'/>
        <input type="password" name="password" id="" placeholder='Enter Password'/>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label className={agree ? 'text-primary px-2' : 'text-danger px-2'}  htmlFor="">Accept terns and condition</label>
        <input disabled={!agree} className='w-50 btn btn-primary my-3' type="submit" value="Register" />
     </form>
     <p>Already have an Account <Link to='/login' className="text-decoration-none" onClick={navigateLogin}>PleaseLogin</Link>  </p>
    <SocialLogin></SocialLogin>
    </div>
  )
}

export default Register