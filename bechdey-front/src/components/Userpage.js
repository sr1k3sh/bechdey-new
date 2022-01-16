import React, { useEffect,useState } from "react";
import { logout, useAuthDispatch, useAuthState } from "../context";
export default function Userpage(){

    const userDetails = useAuthState();
    const dispatch = useAuthDispatch();

    const [name,setName] = useState("");
    useEffect(()=>{
        setName(userDetails.user);
    },[userDetails]);

    const logoutClick = (e) =>{
        e.preventDefault();
        logout(dispatch);
    }
    return(
        <React.Fragment>
            <div>welcome {name}</div>
            <button onClick={logoutClick}>Logout</button>
        </React.Fragment>
    )
}