import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { loginUser } from '../context/action';
import { useAuthDispatch, useAuthState } from '../context';
import form2 from './../assets/svgs/form2.svg';
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
            <div className='bd-auth  container-xl'>
                <div className='row mt-3'>
                    <form className='bd-auth__form col-xl-5' onSubmit={onLogin}>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Email</label>
                            <input className='form-control' name="email" type="text" onChange={e=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Password</label>
                            <input className='form-control' name="password" type='password' onChange={e=>setPassword(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <button type='submit' className='btn btn-outline-primary w-100'>login</button>
                        </div>
                    </form>
                    <div className="col-xl-7">
                        <img className="bd-auth__img" src={form2}></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}