import { useEffect, useState } from "react"
import { TAlert } from "./actions/alerts/types"
export const HOST = window.location.host.includes('local') ? "http://" + window.location.host + '/' : "https://" + window.location.host + '/'

export const SERVER_DOMAIN = window.location.host.includes('local') ? 'http://127.0.0.1:8000/' : 'https://neoback.herokuapp.com/'
export const SERVER_URL = window.location.host.includes('local') ? 'http://127.0.0.1:8000/api/' : 'https://neoback.herokuapp.com/api/'
export const SERVER_URL_AUTH = window.location.host.includes('local') ? 'http://127.0.0.1:8000/auth/' : 'https://neoback.herokuapp.com/auth/'

// export const SERVER_DOMAIN = 'https://neoback.herokuapp.com/'
// export const SERVER_URL = 'https://neoback.herokuapp.com/api/'
// export const SERVER_URL_AUTH = 'https://neoback.herokuapp.com/auth/'

export const handleError = (err): TAlert => {
    var message = ''
    if (err.response) {
        switch (err.response.status) {
            case 401:
                message = 'Ошибка авторизации. Пожалуйста, войдите в систему'
                break;

            case 500:
                message = 'Ошибка сервера, обновите страницу и попробуйте операцию снова'
                break;

            default:
                message = err.response.data.detail
                break;
        }
    }
    return { type: err.response.status, message }
}

export const getImage = (url: string) => {
    return SERVER_DOMAIN.slice(0, -1) + url
}