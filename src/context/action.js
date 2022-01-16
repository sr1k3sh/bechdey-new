import axios from 'axios';
import { setAuthToken } from './../utils/Utils';
import jwt_decode from "jwt-decode";


export async function loginUser(dispatch, loginPayload) {

    const datas = {
        email: loginPayload.email,
        password: loginPayload.password
    }

	try {
		dispatch({ type: 'REQUEST_LOGIN' });

        let response = await axios.post("/api/users/login",datas).then(res=>{
            const {token} = res.data;

            localStorage.setItem("jwtToken", token);
            // Set token to Auth header

            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            if(decoded.name){
                dispatch({ type: 'LOGIN_SUCCESS', payload: token });
                localStorage.setItem('currentUser', decoded.name);
			    return decoded;
            }
        });

		return response;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
