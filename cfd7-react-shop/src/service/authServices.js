import api from '../config/api'
import { apiServices } from '../core'

const authServices ={
    login(user){
        return fetch(`${api}/login`,{
            method:"POST",
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
    },
    register(form){
        return fetch(`${api}/register`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body :JSON.stringify(form)
        }).then(res=>res.json())
    },
    updateInfo(form){
        return apiServices.callApiWithToken(`${api}/update-profile`,form)
    },
    getWishList(){
        return apiServices.callApiWithToken(`${api}/ecommerce/v1/profile/wishlist`)
    }
}


export default authServices