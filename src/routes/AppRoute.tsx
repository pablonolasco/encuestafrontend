import { Route, Redirect, RouteProps, RouteComponentProps } from "react-router";
import {RouteType} from "../types";
import {useAuthState} from "../context/authContext";
//import { RouteType } from '../types/index';
interface AppRouteProps extends RouteProps{
    component:any,
    routeType: RouteType
}

const AppRoute = (props: AppRouteProps) => {
    const {component:Component, path, routeType, ...rest} = props;
    const usuario= useAuthState();

    const renderComponent= (routerProps: RouteComponentProps)=>{
        switch (routeType){
            case "PRIVATE":
                if(usuario.isAutenticado){
                    return <Component {...routerProps}></Component>
                }else{
                    return <Redirect to="/login"></Redirect>
                }
            case "GUEST":
                if(!usuario.isAutenticado){
                    return <Component {...routerProps}></Component>
                }else{
                    return <Redirect to="/user"></Redirect>
                }
            case "PUBLIC":
                return <Component {...routerProps}></Component>
        }
    }

    return (
        <Route {...rest} path={path} render={(routeProps) => renderComponent(routeProps)}></Route>
    )
}

export default  AppRoute;