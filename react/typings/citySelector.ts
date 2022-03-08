export interface Icity {
    id: string
    city: string
    dataEntityId?: string
    postalCode: string
    state: string
}

export interface ICitySelector {
    id: string
    state: string
    cities: Icity[]
    showCities: boolean
}

export interface ICurrentLocation {
    city: string
    state: string
    postalCode: string
}

export interface ISelectsOptions {
    value: string
    label: string
}