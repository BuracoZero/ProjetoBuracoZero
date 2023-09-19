import { api } from '../../api'
export interface IRegister {
    name?: string
    cpf?:string
    password?: string
}
export interface IAuthenticate {
    cpf?: string
    password?: string
}
export interface IUser {
    id: number
    name: string
    cpf: string
}
export interface IUserLogin {
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}
class UserData {
    register(data: IRegister) {
        return api.post('/register', data)
    }
    login(data: IAuthenticate){
        return api.post<IUserLogin>('/login', data)
    }
}
export default new UserData()