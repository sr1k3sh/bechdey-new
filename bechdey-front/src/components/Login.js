import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { loginUser } from '../context/action';
import { useAuthDispatch, useAuthState } from '../context';
export default function Login(props){

    const dispatch = useAuthDispatch();
    const history = useHistory();
    const userDetails = useAuthState();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

        if(userDetails.user){
            history.push('/users');
        }
        return () => {
        
        }
    }, [history,userDetails]);
     
    const onLogin = async(e) =>{
        e.preventDefault();
        try {
			let response = await loginUser(dispatch, {
                email:email,
                password:password
            });

            if (!response.name) return;

			history.push('/users');
		} catch (error) {
			console.log(error);
		}
    }


    return(
        <React.Fragment>
            <div className='login container-xl-12'>
                <form className='login-form' onSubmit={onLogin}>
                    <div>
                        <label className='form-label'>Email</label>
                        <input className='form-control' name="email" type="text" onChange={e=>setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label className='form-label'>Password</label>
                        <input className='form-control' name="password" type='password' onChange={e=>setPassword(e.target.value)}></input>
                    </div>
                    <button type='submit' className='btn btn-primary'>login</button>
                </form>
            </div>
        </React.Fragment>
    )
}