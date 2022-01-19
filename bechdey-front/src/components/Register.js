import React ,{useState, useReducer}from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { initRegisterState, RegisterReducer } from "../context/reducer";
import form2 from './../assets/svgs/form2.svg';
export default function Register(){

    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [password2, setpassword2] = useState();

    const history = useHistory();

    const [state, dispatch] = useReducer(RegisterReducer, initRegisterState);

    const {errorMessage} = state;

    const onRegister = async(e) =>{
        e.preventDefault();
        const userData = {
            name:username,
            email:email,
            password:password,
            password2:password2
        }
        try{
            dispatch({type:"REQUEST_REGISTER"});
            await axios
                .post("/api/users/register", userData)
                .then(res => {
                        dispatch({type:"REGISTER_SUCCESS",payload:res.data})
                        history.push("/login")
                    }
                ).catch(err=>{
                    dispatch({type:"REGISTER_ERROR",error:err.response.data})
                }) // re-direct to login on successful register
            
        }catch(err){
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <div className='bd-auth container-xl'>
                <div className="row mt-3">
                    <form className='bd-auth__form col-xl-5' onSubmit={onRegister}>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Username</label>
                            <input className={errorMessage?.name?"form-control is-invalid":"form-control"} name="name" type="text" onChange={e=>setusername(e.target.value)}></input>
                            {
                                errorMessage?.name && <div className="invalid-feedback">
                                    {errorMessage?.name}
                                </div>

                            }
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Email</label>
                            <input className={errorMessage?.email?"form-control is-invalid":"form-control"} name="email" type="text" onChange={e=>setemail(e.target.value)}></input>
                            {
                                errorMessage?.email && <div className="invalid-feedback">
                                    {errorMessage?.email}
                                </div>
                            }
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Password</label>
                            <input className={errorMessage?.password?"form-control is-invalid":"form-control"} name="password" type='password' onChange={e=>setpassword(e.target.value)}></input>
                            {
                                errorMessage?.password && <div className="invalid-feedback">
                                    {errorMessage?.password}
                                </div>
                            }
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Retype Password</label>
                            <input className={errorMessage?.password2?"form-control is-invalid":"form-control"} name="passwords" type='password' onChange={e=>setpassword2(e.target.value)}></input>
                            {
                                errorMessage?.password2 && <div className="invalid-feedback">
                                    {errorMessage?.password2}
                                </div>
                            }
                        </div>
                        <div className="col-xl-12">
                            <button type='submit' className='btn btn-outline-primary w-100'>Register</button>
                        </div>
                    </form>
                    <div className="col-xl-7">
                        <img className="bd-auth__img" src={form2} alt="register form"></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}