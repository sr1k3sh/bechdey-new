import jwt_decode from "jwt-decode";
let user = localStorage.getItem('currentUser')
	? localStorage.getItem('currentUser')
	: '';
let token = localStorage.getItem('jwtToken')
	? localStorage.getItem('jwtToken')
	: '';
let id = localStorage.getItem('jwtToken')
	? jwt_decode(localStorage.getItem('jwtToken')).id
	: '';


export const initialState = {
	user: '' || user,
	token: '' || token,
	userId:'' || id,
	loading: false,
	errorMessage: null
};

export const initialDataState = {
	dataLoading:true,
	data:null,
	dataCount:null,
	dataError:null,
}

export const dataReducer = (initialDataState, action) => {
	switch (action.type) {
		case "DATA_LOADING":
			return {
				...initialDataState,
				dataLoading:true,
			}
		case "DATA_LOADED":
			return {
				...initialDataState,
				dataLoading:false,
				data:action.payload.data,
				dataCount:action.payload.paginator
			}
		case "DATA_ERROR":
			return{
				...initialDataState,
				dataLoading:false,
				data:null,
				dataError:action.error
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}


export const initProductState = {
	isLoading:true,
	data:null,
	error:null
}

export const productDetailReducer = (initProductState, action) => {
	switch (action.type) {
		case "PRODUCT_LOADING":
			return {
				...initProductState,
				isLoading:true,
			}
		case "PRODUCT_LOADED":
			return {
				...initProductState,
				isLoading:false,
				data:action.payload,
			}
		case "PRODUCT_ERROR":
			return{
				...initProductState,
				isLoading:false,
				data:null,
				error:action.error
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

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
					userId:jwt_decode(action.payload).id,
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

export const initRegisterState = {
	loading:true,
	data:null,
	error:null,
}

export const RegisterReducer = (initRegisterState, action) =>{
	switch (action.type) {
		case 'REQUEST_REGISTER':
			return {
				...initRegisterState,
				loading: true,
			};
		case 'REGISTER_SUCCESS':
            {   
                return {
                    ...initRegisterState,
					loading:false,
                    data:action.payload,
					error:null
                };
            }
		case 'REGISTER_ERROR':
			return {
				...initRegisterState,
				loading: false,
				data:null,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}