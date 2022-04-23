/**
 * utileria para el archivo authReducers.ts
 */
import axios from 'axios';
import { Usuario } from '../types';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = "token"

const defaultUsuario:Usuario ={
    email: "",
    isAutenticado: false,
    token: ""
}

/**
 * guardar el token
 */
const setToken= (token:string) => {
    localStorage.setItem(TOKEN_KEY,token);
}

/**
 * Funcion para obtener el token
 * @returns {@link token}
 */
const getToken= () =>{
    return localStorage.getItem(TOKEN_KEY || null)
}

/**
 * Funcion para eliminar token
 */
const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

/**
 * Funcion que retorna el usuario autenticado
 * @returns {@link Usuario}
 */
export const autenticacion = (token?:string):Usuario =>{

       if (token) {
            setToken(token);
       }
       // == si el token no se recibe por parametro, regresa el token de localStorage
       const _token= token ? token : getToken();

       if (!_token) {
           return {...defaultUsuario}
       }

       // ==decodifica token
       const decoded: any = jwt_decode(_token);

       const tiempo=Date.now()/1000;

       // == valida tiempo del token, si es menor al tiempo actual, regres el usuario por defecto y elimina el token del localStorage
       if (decoded.exp < tiempo) {
           removeToken();
           return {...defaultUsuario}
       }

       axios.defaults.headers.common["Authorization"]=_token;

       // == sobreescirbe el usuario por defecto con los valores del logueo
       return {...defaultUsuario,email:decoded.sub,isAutenticado:true,token:_token}

}

/**
 * Funcion que cierra la sesion del usuario
 * @returns {@link Usuario}
 */
export const cerrarSesion = (): Usuario =>{
   removeToken();
   // == eliminar token de axios
   delete axios.defaults.headers.common['Authorization'];
   return {...defaultUsuario}
}
