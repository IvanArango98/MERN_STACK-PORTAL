import React from 'react';
import { Container, Image, Row, Col , Nav} from 'react-bootstrap';
import './Portal.css'
import CursosUsuarios from './table'
import NavBarProject from '../navbar/navbar'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode';
import {request} from '../helpers/helpers'
import { faBookOpen, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cookies = new Cookies();


export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                           
                FechaNacimiento:new Date(),
                apellido: "",                
                URL: "",  
                mail: "",
                nombre: "",                                
                pass: "" ,
                _id: "",                                                                                        
            loading: true,  
            contador: 0          
         }         
    }

    setValue(index, value)
    {
        this.setState({
            usuario: {
                ...this.state.usuario,
                [index]: value
            }        
        })
    }

    Foto_Perfil()
    {
        let token = cookies.get("_s")
        let decoded = jwt_decode(token);
        let id = decoded.id  
        
                        
        request.get(`/Usuario/${id}`).then( response => {          
            
            let datos =  response.data                
            this.setState({URL:datos.imgUrl})
            this.setState({nombre:datos.nombre})
            this.setState({apellido:datos.apellido})
            this.setState({_id:datos._id})
            
        }).catch(err => {
            console.error(err)
            this.setState({loading: false})
        })                  
    }
  
    render() { 
        if(this.state.contador === 0)
        {
            this.Foto_Perfil()
            this.setState({contador:1})            
        }
        
        return (  
            <>                        
            <NavBarProject/>
            <hr/>
            <Container className="contenedor-datosUsuario">            
            <hr></hr>
            <div className="contenedor-datosUsuario-componentes-der">             
            <h2>{"Nombre: "+ this.state.nombre + " " + this.state.apellido}</h2>                        
            <h4>{"ID: "+ this.state._id}</h4>            
            </div>

            <div className="contenedor-datosUsuario-componentes">                                     
            <Row>
    <Col xs={6} md={4}>
                <Image src= {this.state.URL} thumbnail  
                className="contenedor-datosUsuario-componentes-img"/>                            
                 </Col>
                 </Row>
            </div>
                                    
            </Container>
            <hr/>
            
        <Container className="contenedor-Principal">    
        <Nav 
             justify  variant="tabs" 
             defaultActiveKey="/Cursos"
             onSelect= { eventKey => this.setState({ currentTab: eventKey  })}
             >
                
                <Nav.Item>
                <FontAwesomeIcon icon={faBookOpen}/> 
                    <Nav.Link eventKey="Cursos">Cursos Asignados</Nav.Link>                    
                </Nav.Item>
                <Nav.Item>
                
                    <Nav.Link eventKey="Datos" >
                    <FontAwesomeIcon icon={faBookmark}/> 
                    
                       Datos Generales
                    
                    </Nav.Link>
                </Nav.Item>              
                </Nav>
                <style>
                    {
                     `body { background-image: url(${"https://www.wallpapertip.com/wmimgs/219-2191818_os-x-mavericks-activity-monitor-change-the-login.jpg"})}`
                    }
                </style>           
                    <hr></hr>
       <CursosUsuarios/>

       </Container>
       </>
        );
    }
}
 
 