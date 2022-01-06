export const GET_SERVICES = 'GET_SERVICES'
export const GET_HISTORY = 'GET_HISTORY'


export type TService = {
    title: string,
    decs: string,
    price: string,
    img: string
}

export type THistory = {
    title: string,
    decs: string,
    img: string
}

interface IGetService {
    type: typeof GET_SERVICES
    payload: TService[]
}
interface IgetHistory {
    type: typeof GET_HISTORY
    payload: THistory[]
}

export type TServiceDispatchTypes = IGetService | IgetHistory