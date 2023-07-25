/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   // const navigate = useNavigate();
    const register = (() => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            alert("Registered successfully")
            
        }).catch((error) => {
            console.log(error.message);
        })
    })
   
    

    return (
        <div className='signup-card'>
            <div className='signup'>

                <p className="heading">Sign up</p>
                

                <div class="input-container">
                    <label >Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>


                <div className="input-container">
                    <label >Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='text' />
                </div>

                <div className='input-container'>
                    <label>Password</label>
                    <div className='password-input-container'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                        
                        />
    

                    </div>
                </div>


                <button className='submit-button' onClick={register} style={{ marginLeft: '65px', backgroundColor: 'blue', color: 'white', padding: '10px 20px', }}>SIGNUP</button>
                <p style={{ marginLeft: '-70px' }}>Have an Account: <a style={{ color: 'red' }} href="/login">Login</a></p>

            </div>

        </div>
    );
}
export default SignUp;