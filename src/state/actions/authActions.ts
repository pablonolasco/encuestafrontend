/**
 * acciones para el authReducers.ts
 * se declaran las dos acciones
 * login @param token
 * logout @param
 */
export type AuthActions= {type: 'login', token: string} | {type:'logout'};