/**
 * 
 */

export type Usuario = {
    email:string,
    token: string,
    isAutenticado:boolean
};

/**
 * type para tipo de
 */
export type RouteType = "PRIVATE" | "PUBLIC" | "GUEST";

/**
 * type para las rutas
 */

export type Route= {
    path:string,
    component:any,
    routeType: RouteType
}