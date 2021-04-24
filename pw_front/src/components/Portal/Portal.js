import React from 'react';
import { Container, Image, Row, Col , Nav,Card,ListGroup,Accordion,Button} from 'react-bootstrap';
import './Portal.css'
import CursosUsuarios from './table'
import DatosUsuarios from './DatosUsuarios'
import ContenidoCurso from './Curso'
import NavBarProject from '../navbar/navbar'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode';
import {request} from '../helpers/helpers'
import { faBookOpen, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CalendarioPortal from './calendario'

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
         this.changeTab = this.changeTab.bind(this)
              
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

    changeTab(tab)
    {
        this.setState({ currentTab: tab });
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
    componentWillMount()
    {
        this.Foto_Perfil()
    }
    Calendario()
    {
        window.location.href = "/Portal/Calendario";
    }
  
    render() { 
                
        return (  
            <>                        
            <NavBarProject/>
            <hr/>       
                <Card style={{ width: '60rem' }} className="Card-Usuario">                
                <Image src= {this.state.URL} thumbnail                  
                    className="contenedor-datosUsuario-componentes-img"/>                                                                                 
                    <Card.Text className="Card-Nombre">{"Nombre: "+this.state.nombre + " " + this.state.apellido}</Card.Text>
                    <Card.Text className="Card-ID">
                    {"ID: "+this.state._id}
                    </Card.Text>                                    
                    <img src="https://www.url.edu.gt/DocsApoyo/2020/banner-cc.jpg"
                    className="Card-Calendario"
                    onClick={()=> this.Calendario()}
                    ></img>
                </Card>
            <hr/>
            <Accordion defaultActiveKey="0" style={{ width: '60rem'}} className="Acordion-card">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
            

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
                <FontAwesomeIcon icon={faBookmark}/>                     
                    <Nav.Link eventKey="Datos" >                    
                    Datos Generales                    
                    </Nav.Link>
                </Nav.Item>              
                </Nav>
                
            {
                this.state.currentTab === "Cursos" ?
                <CursosUsuarios  changeTab = {this.changeTab}  /> :
                 this.state.currentTab === "Datos" ?
                  <DatosUsuarios  changeTab = {this.changeTab} /> :                                 
                 <CursosUsuarios  changeTab = {this.changeTab} /> 
            }
             

                {/* <style>
                    {
                     `body { background-image: url(${"https://www.wallpapertip.com/wmimgs/219-2191818_os-x-mavericks-activity-monitor-change-the-login.jpg"})}`
                    }
                </style> */}
                    
       </Container>
       </>
        );
    }
}
 
 