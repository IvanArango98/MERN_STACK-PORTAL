import React from 'react';
import { Form, Button, Row, Col, Container, InputGroup,Image} from 'react-bootstrap'
import NavBarProject2 from '../navbar/navbar2'
import Loading from '../loader/loader'
import 'react-datepicker/dist/react-datepicker.css'
import ConfirmationPrompt from '../prompts/confirmar'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode';
import { request } from '../helpers/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUpload } from '@fortawesome/free-solid-svg-icons'
import Actualizar from '../prompts/Actualizar'

const cookies = new Cookies();


class EditarPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuario: {
                nombre: "",
                apellido: "",
                mail: "",
                pass: "" ,        
                FechaNacimiento:new Date(),
                image: null            
                },
                loading:false  ,                     
                confirmation: {
                    titulo:"Modificar Información",
                    texto:"¿Deseas modificar su información?",
                    show:false,                    
                },
                dia:"",
                mes:"",
                año:"",
                imgUrl:"",
                message: {
                    text:"",
                    show:false
                },

         }
         this.onCancel = this.onCancel.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
    }
    componentDidMount()
    {
        this.getData()
    }

    onExitedMessage()
    {
       window.location.href = "/Portal/EditarPerfil"
    }

    getData()
    {
        let token = cookies.get("_s")
        let decoded = jwt_decode(token);
        let id = decoded.id 

        request.get(`/Usuario/${id}`).then( response => {              
            this.setState(
                {
                    nombre:response.data.nombre,
                    apellido:response.data.apellido,
                    FechaNacimiento:response.data.FechaNacimiento,
                    mail:response.data.mail,
                    carrera:response.data.carrera,
                    imgUrl:response.data.imgUrl
                }
            )
                             
                        
            var s = this.state.FechaNacimiento + ""
            var d = s.substring(0,10)
            var s1 = d.split("-")            
            this.setState({
                dia: s1[2],
                mes: s1[1],
                año: s1[0]
            })
            //2021-03-29T06:00:00.000Z
                

        }).catch(err => {
            console.error(err)            
            this.setState({loading:false});
        }) 
    }

    onCancel()
    {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false
            }
        })
    }
    onConfirm()
    {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false
            }
        },  this.ActualizarInformacion());   
    }

    ActualizarInformacion()
    {

    }

    ActualizarFoto()
    {
        this.setState({            
           message: {
               //mensaje que viene del backend
               text: "",
               show:true
           }})
    }
    
    
    setValue(index, value)
    {
        this.setState({
            usuario: {
                ...this.state.empleado,
                [index]: value
            }        
        })
    }

    render() {                             
            
        return ( 
            <> 
        <div>
            <NavBarProject2/>
            <Loading show={this.state.loading}/>
            <Actualizar
                    text= {this.state.message.text}
                    show= {this.state.message.show}
                    duration={50000}
                    onExited= {this.onExitedMessage}
                />  

            <ConfirmationPrompt
                    show={this.state.confirmation.show}
                    titulo={this.state.confirmation.titulo}
                    texto={this.state.confirmation.texto}
                    onCancel={ this.onCancel }
                    onConfirm={ this.onConfirm }
                />
            <br></br>                 
            <h2>Editar Información Usuario</h2>            
            <hr></hr>
            <Container>                            
            <Row>                                                
                </Row>                
                
                <Form>     


                <Form.Row>
                <Form.Group as={Col} md="6" controlId="formGridEmail">
                <Form.Label>Actualizar nombre</Form.Label> 
            <Form.Group as={Col}>                    
                                    <InputGroup>                                        
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombre"
                                            value = {this.state.nombre}
                                            onChange= { e => this.setValue("nombre",e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formGridPassword">
                <Form.Label>Actualizar apellido</Form.Label> 
                <Form.Group as={Col}>                    
                                    <InputGroup>                                        
                                        <Form.Control
                                            type="text"
                                           placeholder="Apellido"
                                            value = {this.state.apellido}
                                            onChange= { e => this.setValue("apellido",e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                </Form.Group>
                </Form.Row>


                <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Actualizar Día</Form.Label>
          <Form.Control type="text" placeholder="Día" required
          value = {this.state.dia}
          />
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Actualizar Mes</Form.Label>
          <Form.Control type="text" placeholder="Mes" required 
          value = {this.state.mes}
          />          
        </Form.Group>
            
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Actualizar Año</Form.Label>
          <Form.Control type="text" placeholder="Año" required
          value = {this.state.año}
          />          
        </Form.Group>  
        </Form.Row>  

<Form.Label className="texto">Actualizar Foto de perfil</Form.Label>        
        <Form.Row>        
        <Form.Group as={Col} md="5" controlId="validationCustom04">        

<Image src= {this.state.imgUrl} thumbnail                  
                    className="contenedor-datosUsuario-componentes-img"/> 
<FontAwesomeIcon icon={faUpload} onClick={() => this.ActualizarFoto()}/>    
  </Form.Group>  
  </Form.Row>           
   

                <Button variant="primary" type="submit"
                 onClick = { () => this.setState({ confirmation: {...this.state.confirmation, show: true}})}                
                >                      
                Actualizar Información             
                </Button>                                                         

                </Form>                                   
                                                            
            </Container> 
                                           
        </div>           
        </>     );
    }
}
 
export default EditarPerfil;