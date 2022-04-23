import { Usuario } from "../../types";
import { AuthActions } from "../actions/authActions";
import { autenticacion, cerrarSesion } from '../../utils/auth';
import produce from 'immer';

/**
 * iniciar state de tipo Usuario
 */
export const authIniciarState: Usuario= autenticacion();

export const AuthReducer = produce((state: Usuario, action: AuthActions): Usuario => {
    switch (action.type) {
        case "login":
        // == para usar esta sintaxis se instalo la dependecia immer
        state= autenticacion(action.token);
            return state;
        case "logout":
            state=cerrarSesion();
            return state;
        default:
            return state;
    }
});

