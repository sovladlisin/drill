import { GET_HISTORY, GET_SERVICES, THistory, TService, TServiceDispatchTypes } from "../../actions/service/types"

interface IDefaultState {
    services: TService[],
    history: THistory[],
}

const defaultState: IDefaultState = {
    services: [],
    history: [],
}

export const serviceReducer = (state: IDefaultState = defaultState, action: TServiceDispatchTypes) => {
    switch (action.type) {
        case GET_HISTORY:
            return ({
                ...state,
                history: action.payload
            })

        case GET_SERVICES:
            return ({
                ...state,
                services: action.payload
            })

        default:
            return state
    }
}

