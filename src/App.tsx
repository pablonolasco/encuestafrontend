import  Register  from './pages/Register';
import { AuthProvider } from './context/authContext';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import AppRoute from "./routes/AppRoute";
import routes from "./routes/route";

function App() {
  return (
    <AuthProvider>
     <Router>
       <Switch>
           {
               routes.map(
                   route=><AppRoute
                       {
                           component={route.component}
                           path={route.path}
                           routeType={route.routeType}
                           key={route.path}
                           exact
                       }></AppRoute>
               );
           }
       </Switch>
     </Router>
    </AuthProvider>
  );
}

export default App;
