import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { LOGIN_REGISTER } from "../constants/path";

function PrivateRouter (props){
    let {user} = useSelector(store=>store.auth)
    if(!user) return <Redirect to={LOGIN_REGISTER} />
    return <Route {...props}/>
}

export default PrivateRouter