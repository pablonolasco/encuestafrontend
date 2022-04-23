import axios from 'axios';
import { USUARIO_LOGIN_REGISTRO_ENDPOINT, USUARIO_LOGIN } from '../utils/Endpoints';

/**
 * Metodo para registrar un usuario
 * @param name 
 * @param email 
 * @param password 
 * @returns usuario 
 */
export const registrarUsuario=(name:string, email:string, password:string)=>{
    return axios.post(USUARIO_LOGIN_REGISTRO_ENDPOINT,{
        nombre:name,
        email:email,
        password:password
    })
}

/**
 * Metodo de login
 * @param email 
 * @param password 
 * @returns token
 */
export const loginUsuario=(email:string,password:string)=>{
    return axios.post(USUARIO_LOGIN,{
        email:email,
        password
    });
}