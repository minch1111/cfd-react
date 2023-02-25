import api from "../config/api"

export const apiServices = {
    callApi(url) {
        return fetch(url).then(res => res.json())
    },
    callApiWithToken(url, params) {
        let token = JSON.parse(localStorage.getItem('token'))
        let accessToken = token.accessToken
        return fetch(url), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(params)
        }.then(async res => {
            if (res?.status === 403 || res?.status === 401) {
                let refreshToken = token?.refreshToken
                let newToken = await fetch(`${api}/elearning/v4/refresh-token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'refreshToken': refreshToken
                    })
                }).then(res => res.json())

                localStorage.setItem('token', JSON.stringify(newToken.data))
                accessToken = newToken?.data?.accessToken
                return fetch(url), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify(params)
                }
            }
            else{
                return res.json()
            }

        })
    }
}