import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from '../auth/privateroute'
import Login from '../login/login'
import CrearUsuario from '../CrearUsuarios/CrearUsuarios'

export default function AppRouter()
{
    return(
            <Router>
                <Switch>
                    <Route exact path={["/","/login"]} component={Login}/>
                    <Route exact path={["/","/CrearUsuario"]} component={CrearUsuario}/>
                    {/* <PrivateRoute exact path="/CrearUsuario" component= {CrearUsuario} /> */}
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>
                </Switch>                
            </Router>
    );
}