import api from '../config/api'
import { apiServices } from './callApi';



const authServices = {
    login(user) {
        return fetch(`${api}/elearning/v4/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    },
    updateUser(form) {
        let token = JSON.parse(localStorage.getItem('token'));
        let accessToken = token?.accessToken;
        return apiServices.callApiWithToken(`${api}/elearning/v4/profile/update`,form)
        // fetch(`${api}/elearning/v4/profile/update`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${accessToken}`
        //     },
        //     body: form
        // }).then(async res => {
        //     if (res?.status === 403) {
        //         let refreshToken = token?.refreshToken;
        //         // console.log(refreshToken);
        //         let newToken = await fetch(`${api}/elearning/v4/refresh-token`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(
        //                 {
        //                     'refreshToken': refreshToken
        //                 }
        //             )
        //         }).then(res => res.json())
        //         localStorage.setItem('token', JSON.stringify(newToken.data))
        //         // console.log(`newToken`, newToken)
        //         // console.log(apiServices.callApiWithToken(`${api}/elearning/v4/profile/update`,form))
        //         accessToken = newToken?.data?.accessToken
        //         return fetch(`${api}/elearning/v4/profile/update`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': `Bearer ${accessToken}`
        //             },
        //             body: form
        //         })
        //     } else {
        //         return res.json();
        //     }
        // })
    }
}

export default authServices