import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from.pathname || "/"

  const handleSubmit = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
   await signInWithEmailAndPassword(email, password);
   const {data} = await axios.post('http://localhost:5000/getToken', {email});
    //  console.log(data)
    localStorage.setItem('accessToken', data.accessToken);
     navigate(from, {replace: true});
  };




  const [ signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
     
      let errorElement;
      if(error ){
           errorElement = <p className='text-danger'>Error: {error?.message} </p>
       }
  if (user) {
  //  navigate(from, {replace: true});
  }

  const navigateRegister = (event) => {
    navigate("/register");
  };
  const resetPassword = async() =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email')
    }else{
      toast("please enter your email")
    }
 
  }


  return (
    <div className="container w-50 mx-auto">
      <Helmet><title>Login</title> </Helmet>
      <h1 className="login-heading">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
      
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="px-5" variant="primary w-50 mb-3" type="submit">
          Login Now
        </Button>
      </Form>
      <p className=""> New to car doctor ?  
        {" "}
        <Link
          to="/register"
          className="text-decoration-none"
          onClick={navigateRegister}
        >
         Please Register
        </Link>{" "}
      </p>
      <p className="">Forget your password ?  
        {" "}
        <Link
          
          className="text-decoration-none "
          onClick={resetPassword}
        >
         Reset password
        </Link>{" "}
      </p>
      <div className="text-center">{errorElement} </div>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
