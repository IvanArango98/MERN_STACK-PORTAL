import React from 'react';
import { Container, Image, Row, Col , Nav,Card,ListGroup,Accordion,Button} from 'react-bootstrap';
import './Portal.css'
import CursosUsuarios from './table'
import DatosUsuarios from './DatosUsuarios'
import NavBarProject from '../navbar/navbar'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode';
import {request} from '../helpers/helpers'
import { faBookOpen, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AcordionOp from './acordionOp'
import Loading from '../loader/loader'
import SimpleFooter from '../footer/SimpleFooter'

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
            tipo: ""    ,
            carrera:"",
            loading:false    
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
    
    changeTYPE(type)
    {
        this.setState({tipo:type})
    }

    Foto_Perfil()
    {
        let token = cookies.get("_s")
        let decoded = jwt_decode(token);
        let id = decoded.id  
                                
        request.get(`/Usuario/${id}`).then( response => { 
            this.setState({loading:true});                     
            let datos =  response.data                
            this.setState({URL:datos.imgUrl})
            this.setState({nombre:datos.nombre})
            this.setState({apellido:datos.apellido})
            this.setState({_id:datos._id})                                  
            this.setState({carrera:datos.carrera})   
            localStorage.setItem("sesionDataCarrera",JSON.stringify({            
                carrera: this.state.carrera        
            }))                        
            this.setState({loading:false});       
        }).catch(err => {
            console.error(err)
            this.setState({loading: false})
        })               
    }
    componentWillMount()
    {
        this.Foto_Perfil()    
        this.setState({tipo:"cursos"})
        this.Iniciar()
    }

    Calendario()
    {
        window.location.href = 'https://www.url.edu.gt/PortalEstudiantes/Pages/pe_calendarios.aspx';
    }

    Datos()
    {
        this.setState({tipo:"datos"})
        console.log(this.state.tipo)
    }
    Iniciar()
    {
        localStorage.setItem("seccion",JSON.stringify({
            seccion: [""]
        }))   
    }

    Cursos()
    {
        this.setState({tipo:"cursos"})
    }
  
    render() { 
              

        return (  
            <>                        
            <NavBarProject/>
            <Loading
            show = {this.state.loading}
            />
            <br/>       
                <Card style={{ width: '65rem' }} className="Card-Usuario">                
                <Image src= {this.state.URL} thumbnail                  
                    className="contenedor-datosUsuario-componentes-img"/>                                                                                 
                    <Card.Text className="Card-Nombre">{"Nombre: "+this.state.nombre + " " + this.state.apellido}</Card.Text>
                    <Card.Text className="Card-ID">
                    {"ID: "+this.state._id}
                    </Card.Text>         
                    <Card.Text className="Card-Carrera">
                    {"Carrera: "+this.state.carrera}
                    </Card.Text>                                    
                    <img src="https://www.url.edu.gt/DocsApoyo/2020/banner-cc.jpg"
                    className="Card-Calendario"
                    onClick={()=>this.Calendario()}
                    ></img>
                </Card>
            <br/>      

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
                <CursosUsuarios  changeTab = {this.changeTab} /> : 
                 this.state.currentTab === "Datos" ?
                  <DatosUsuarios  changeTab = {this.changeTab}/> :                                 
                 <CursosUsuarios  changeTab = {this.changeTab}/>                  
            }       
        

            <AcordionOp Tipo={this.state.tipo}></AcordionOp>                  
                            
       </Container>
            <SimpleFooter/>
       </>
        );
    }
}
 
 