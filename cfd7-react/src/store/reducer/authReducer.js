const initialState = {
    user : JSON.parse(localStorage.getItem('login')),
    openLogin:false
}

export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case "OPEN_LOGIN":
            return {
                ...state,
                openLogin:true
            }
        case "CLOSE_LOGIN":
            return{
                ...state,
                openLogin:false
            }
        case "LOGIN":
            localStorage.setItem('login', JSON.stringify({
                ...action.payload,
                name: action.payload.first_name + " " + action.payload.last_name
              }));
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            return{
                ...state,
                user:action.payload
            }
        case "LOGOUT":
            localStorage.removeItem('login');
            localStorage.removeItem('token')
            return{
                ...state,
                user:localStorage.getItem('login'),
                openLogin:false
            }    
    }
    return state;

}