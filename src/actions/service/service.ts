import axios from "axios";
import { Dispatch } from "react";
import { SERVER_URL } from "../../utils";
import { GET_HISTORY, GET_SERVICES, TServiceDispatchTypes } from "./types";

export const getServices = () => (dispatch: Dispatch<TServiceDispatchTypes>) => {
    axios.get(SERVER_URL + 'getServices').then(res => {
        dispatch({
            type: GET_SERVICES,
            payload: res.data
        })
    })
}
export const getHistory = () => (dispatch: Dispatch<TServiceDispatchTypes>) => {
    axios.get(SERVER_URL + 'getHistory').then(res => {
        dispatch({
            type: GET_HISTORY,
            payload: res.data
        })
    })
}