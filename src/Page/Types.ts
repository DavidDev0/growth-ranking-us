export interface ItemCardModel {
    growth: number
    value: number
    state: string
}

export type RequestStatusModel = 'success' | 'error' | 'loading'

export interface RequestResponse {
    'ID State': string
    'ID Year': number
    State: string
    [key: string]: string | number
}
