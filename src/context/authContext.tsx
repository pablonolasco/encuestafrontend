import { createContext, Dispatch, FC, ReactNode, useContext, useReducer } from "react";
import { AuthActions } from '../state/actions/authActions';
import { authIniciarState, AuthReducer } from '../state/reducers/authReducers';
import { Usuario } from '../types';

// == crear el contexto
export const AuthStateContext = createContext<Usuario>(authIniciarState);
// == el dispatch ejecuta la accion o la funcion
export const AuthDispatchContext = createContext<Dispatch<AuthActions>>(() => undefined);

interface AuthProviderProps { 
    children: ReactNode
}

/**
 * Funciones para usar de manera global los AuthProvider, useAuthState, useAuthDispatch
 * @param 
 * @returns 
 */
 export const AuthProvider:FC<AuthProviderProps> = ({ children }) => {
    const [usuario,dispatch] = useReducer(AuthReducer,authIniciarState);

    return (
        <AuthStateContext.Provider value={usuario}>
        <AuthDispatchContext.Provider value={dispatch}>
            {children}
        </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
    )
}

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if (context === undefined) {
        throw new Error("useAuthState deberia de ser usado dentro de un AuthProvider")
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);

    if (context === undefined) {
        throw new Error("useAuthDispatch deberia de ser usado dentro de un AuthProvider")
    }

    return context;
}
