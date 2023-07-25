/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const Login = (() => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            alert("Login successfully")
            navigate('/todo')
        }).catch((error) => {
            console.log(error.message);
        })
    })
    return (
        <div className='Login-card'>
            <div className='login'>
                <p className="heading">Login</p>
               
                <div className='input-container'>
                    <label>email</label>
                    <input type='text' onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className='input-container'>
                    <label>Password</label>
                    <div className='password-input-container'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                        
                        />
                       

                    </div>
                
                <button className='submit-button' onClick={Login} style={{ marginLeft: '65px' }}>Login</button>
                    <p style={{ marginLeft: '80px' }}>Dnt have an account: <a style={{ color: 'red' }} href="/signup ">SignUp</a></p>

            </div>


        </div>

        </div>
    );
}

export default Login;