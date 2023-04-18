export interface UserState {
    id: number,
    name: string,
    language: string
}

// Doy el valor inicial que quiero para los datos que quiero tener guardados en el estado
export const initialUserState: UserState = {
    id: -1,
    name: "",
    language: "EN"
}