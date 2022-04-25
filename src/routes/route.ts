import {Route} from "../types";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Usuario from "../pages/User";

/**
 * Rutas de la aplicacion
 */
const routes:Route[]=[
    {
        path:"/",
        component:Home,
        routeType:"PUBLIC"
    },
    {
        path:"/login",
        component:Login,
        routeType:"GUEST"
    },
    {
        path:"/registro",
        component:Register,
        routeType:"GUEST"
    },
    {
        path:"/users",
        component: Usuario,
        routeType:"PRIVATE"
    }
]

export default routes;