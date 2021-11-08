import api from "../config/api";

export const apiServices = {
    callApi(url) {
        return fetch(url).then(res => res.json())
    },
    callApiWithToken(url, params) {
        let token = JSON.parse(localStorage.getItem('token'))
        let accessToken = token?.accessToken;
        let refreshToken = token?.refreshToken;

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(params)
        }).then(async res => {
            if (res?.status === 403) {
                let refreshToken = token?.refreshToken;
                // console.log(refreshToken);
                let newToken = await fetch(`${api}/elearning/v4/refresh-token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            'refreshToken': refreshToken
                        }
                    )
                }).then(res => res.json())
                localStorage.setItem('token', JSON.stringify(newToken.data))
                // console.log(`newToken`, newToken)
                // console.log(apiServices.callApiWithToken(`${api}/elearning/v4/profile/update`,form))
                accessToken = newToken?.data?.accessToken
                return fetch(`${api}/elearning/v4/profile/update`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify(params)
                })
            } else {
                return res.json();
            }
        })
    }
}
