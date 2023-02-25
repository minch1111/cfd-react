import { GET_WISH_LIST, LOGIN_SUCCESS } from "../type";

const initialState = {
    user:JSON.parse(localStorage.getItem("login")),
    wishList: JSON.parse(localStorage.getItem('wishList')) || []
}

export const authReducer =(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('login', JSON.stringify(action.payload));
            localStorage.setItem('token',JSON.stringify(action.payload.token))

            return{
                ...state,
                user:action.payload
            }
        case "LOGOUT":
            localStorage.removeItem('login');
            localStorage.removeItem('token');
            return{
                ...state,
                user:localStorage.getItem('login')
            }    
        case GET_WISH_LIST:
            return{
                ...state
            }
            
    }
    return state

}