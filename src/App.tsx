import  Register  from './pages/Register';
import { AuthProvider } from './context/authContext';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
     <Router>
       <Switch>
         <Route component={Login} exact path="/login"></Route>
         <Route component={Register} exact path="/registro"></Route>
         <Route component={Home} exact path="/home"></Route>
       </Switch>
     </Router>
    </AuthProvider>
  );
}

export default App;
