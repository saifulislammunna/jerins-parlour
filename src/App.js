 import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
       <Switch>
          <PrivateRoute path="/appointment">
            <Appointment/>
          </PrivateRoute >
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
