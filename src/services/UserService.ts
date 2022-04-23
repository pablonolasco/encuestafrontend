import axios from 'axios';
import { USUARIO_LOGIN_REGISTRO_ENDPOINT, USUARIO_LOGIN } from '../utils/Endpoints';


export const registrarUsuario=(name:string, email:string, password:string)=>{
    return axios.post(USUARIO_LOGIN_REGISTRO_ENDPOINT,{
        nombre:name,
        email:email,
        password:password
    })
}

export const loginUsuario=(email:string,password:string)=>{
    return axios.post(USUARIO_LOGIN,{
        email:email,
        password
    });
}