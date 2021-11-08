import api from "../config/api"
import { apiServices } from "./callApi"

const courseService = {
    home() {
        return apiServices.callApi(`${api}/elearning/v4/home`)
    },
    courseDetail(slug) {
        return apiServices.callApi(`${api}/elearning/v4/course/${slug}`)
    },
    register(slug, form) {
        let token = JSON.parse(localStorage.getItem('token'))
        // let accessToken = token?.accessToken;
        // let refreshToken = token?.refreshToken;

        return apiServices.callApiWithToken(`${api}/elearning/v4/course-register/${slug}`,form)
        // fetch(`${api}/elearning/v4/course-register/${slug}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${accessToken}`
        //     },
        //     body: JSON.stringify(form)
        // }).then(async res => {
        //     //kiểm tra status 
        //     // nếu 403 => refreshToken
        //     //trả về bth    

        //     if (res?.status === 403) {

        //         let refrToken = await fetch(`${api}/elearning/v4/refresh-token`, {
        //             method: "POST",
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(
        //                 {
        //                     refreshToken
        //                 }
        //             )
        //         }).then((resToken) => {
        //             return resToken.json()
        //         })
        //         console.log(`refrToken`, refrToken)
        //         localStorage.setItem('token', JSON.stringify(refrToken.data))
        //         accessToken = refrToken.data?.accessToken
        //         return fetch(`${api}/elearning/v4/course-register/${slug}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': `Bearer ${accessToken}`
        //             },
        //             body: JSON.stringify(form)
        //         })
        //     }
        //     else {
        //         return res.json();
        //     }
        // })

        // console.log(`token`, token)
    },
    contact(form){
        return apiServices.callApiWithToken(`${api}/elearning/v4/contact`,form)
    },
    course(){
        return apiServices.callApi(`${api}/elearning/v4/courses`)
    }
}

export default courseService