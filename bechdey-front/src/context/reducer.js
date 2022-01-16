import jwt_decode from "jwt-decode";
let user = localStorage.getItem('currentUser')
	? localStorage.getItem('currentUser')
	: '';
let token = localStorage.getItem('jwtToken')
	? localStorage.getItem('jwtToken')
	: '';

export const initialState = {
	user: '' || user,
	token: '' || token,
	loading: false,
	errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
            {   
                return {
                    ...initialState,
                    user: jwt_decode(action.payload).name,
                    token: action.payload,
                    loading: false,
                };
            }
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
				token: '',
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
