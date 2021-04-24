import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from '../auth/privateroute'
import Login from '../login/login'
import CrearUsuario from '../CrearUsuarios/CrearUsuarios'
import Portal from '../Portal/Portal'
import ContenidoCurso from '../Portal/Curso'
import CalendarioPortal from '../Portal/calendario'

export default function AppRouter()
{
    return(
            <Router>
                <Switch>
                    <Route exact path={["/","/login"]} component={Login}/>
                    <Route exact path={["/","/CrearUsuario"]} component={CrearUsuario}/>                                        
                    <PrivateRoute exact path="/Portal" component= {Portal} />
                    <PrivateRoute exact path="/Portal/Curso" component= {ContenidoCurso} />
                    <PrivateRoute exact path="/Portal/Calendario" component= {CalendarioPortal} />
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>1
                </Switch>                
            </Router>
    );
}

