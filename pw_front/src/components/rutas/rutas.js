import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from '../auth/privateroute'
import Login from '../login/login'
import CrearUsuario from '../CrearUsuarios/CrearUsuarios'
import Portal from '../Portal/Portal'
import ContenidoCurso from '../Portal/Curso'
import AsignarCurso from '../PortalAcciones/asignar'
import RetirarCurso from '../PortalAcciones/retirar'
import EditarPerfil from '../PortalAcciones/EditarPerfil'
import Inicio from '../General/general'

export default function AppRouter()
{
    return(
            <Router>
                <Switch>                
                    <Route exact path={["/","/principal"]} component={Inicio}/>
                    <Route exact path={["/","/login"]} component={Login}/>                                                           
                    <Route exact path={["/","/CrearUsuario"]} component={CrearUsuario}/> 
                    <PrivateRoute exact path="/Portal" component= {Portal} />
                    <PrivateRoute exact path="/Portal/Curso" component= {ContenidoCurso} />                    
                    <PrivateRoute exact path="/Portal/AsignarCurso" component= {AsignarCurso} />             
                    <PrivateRoute exact path="/Portal/RetirarCurso" component= {RetirarCurso} />             
                    <PrivateRoute exact path="/Portal/EditarPerfil" component= {EditarPerfil} />  
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>1
                </Switch>                
            </Router>
    );
}

