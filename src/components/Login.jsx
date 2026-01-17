import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/services/thunks';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setToken } from '../redux/Auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async() => {
        const result = await dispatch(loginUser({email, password}));
        console.log(result) // {data, profile}
        // redirect:

        result.abort()
        navigate('/dashboard', {state: result});
    }

    const handleSSOLogin = async() => {
        try{
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            
            dispatch(setToken(token));
            const user = result.user;
            console.log(token, user);

        }catch(error){
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' />
            <input type='password' />
            <button type='submit'> Submit </button>
        </form>

        <button onClick={handleSSOLogin}> SignIn with Google </button>
    </div>
  )
}

export default Login