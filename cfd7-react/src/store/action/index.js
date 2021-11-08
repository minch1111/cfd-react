import authServices from "../../services/authServices"
import courseService from "../../services/courseServices"
import { CLOSE_LOGIN, GET_COURSE, LOGIN, LOGOUT, OPEN_LOGIN } from "../type"

export const openLoginAction = () => {
    return { type: OPEN_LOGIN }
}
export const closeLoginAction = () => {
    return { type: CLOSE_LOGIN }
}
export const logout = () => {
    return { type: LOGOUT }
}
export const loginAction = (data) => {
    return { type: LOGIN, payload: data }
}

export const fetchLogin = (form) => {
    return async (dispatch) => {
        let res = await authServices.login(form)
        if (res.data) {
            dispatch(loginAction(res.data))
        } else {

        }
    }
}

export const getCourseAction = (data) => {
    return { type: GET_COURSE, payload: data }
}

export const fetchGetCourse = () => { 
    return async (dispatch)=>{
        let res = await courseService.course();
        if(res.online){
            dispatch(getCourseAction(res))
        }else{
            
        }
    }
}