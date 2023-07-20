import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user,  error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1,  error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if(error || error1){
        errorElement = <div className=""><p className='text-danger'>Error: {error?.message} {error1?.message}</p> </div>
    }
    if(user || user1){
        navigate('/home')
    }
    return (
        <div className="">
            <div className='text-center d-flex align-items-center' >
            <hr  className='w-50' />
            <p className='d-inline mt-2 px-2' >OR</p>
            <hr  className='w-50' />
            
            </div>
            <div className="text-center">{errorElement} </div>
            <div className="">
                <button onClick={() => signInWithGoogle()}
                 className='btn btn-primary w-50 my-2'>
                    <img style={{width:"30px"}} className='mx-2 ' src={google} alt=""  />
                    Google Sign In
                </button>
                <button onClick={()=> signInWithGithub()}
                 className='btn btn-primary w-50 my-2'>
                    <img style={{width:"30px"}} className='mx-2' src={github} alt=""  />
                    Github Sign In
                </button>
                <button className='btn btn-primary w-50 my-2'>
                    <img style={{width:"30px"}} className='mx-2' src={facebook} alt=""  />
                    Facebook Sign In
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;