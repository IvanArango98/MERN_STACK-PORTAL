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
import ImgPrev from './Previsualizador'

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
                FechaAc:{
                dia:"",
                mes:"",
                año:""},
                imgUrl:"",
                message: {
                    text:"",
                    show:false
                },
                filepreview: null ,                
         }
         
         this.onCancel = this.onCancel.bind(this)
        this.onConfirm = this.onConfirm.bind(this)        
        this.onExitedMessage = this.onExitedMessage.bind(this)
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
            
            var myarr = {
                    nombre:response.data.nombre,
                    apellido:response.data.apellido,
                    FechaNacimiento:response.data.FechaNacimiento,
                    mail:response.data.mail,
                    carrera:response.data.carrera,
                    imgUrl:response.data.imgUrl,                    
            }
            this.setState(
                {
                    usuario:myarr
                }
            )
                         
            var s = this.state.usuario.FechaNacimiento + ""
            var d = s.substring(0,10)
            var s1 = d.split("-")  
            var date1 = {dia: s1[2],mes:s1[1],año: s1[0]}          

            this.setState({
                FechaAc:date1
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
    
        if(this.state.FechaAc.mes == 2 && this.state.FechaAc.dia > 28)
        {
            alert("Ha ingresado una fecha no valida.")
        }
        else{
            localStorage.setItem("Actualizar",JSON.stringify({            
            nombre: this.state.usuario.nombre,
            apellido: this.state.usuario.apellido,
            FechaAc: new Date(`${this.state.FechaAc.año}/${this.state.FechaAc.mes}/${this.state.FechaAc.dia} 00:00:00`),            
            carrera: this.state.usuario.carrera,
            mail: this.state.usuario.mail
        }))        
        }

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
                ...this.state.usuario,
                [index]: value
            }        
        })
    }

    setDate(index, value)
    {
        if(index === "año" && value > 1900 && value < 2022)
        {
        this.setState({
            FechaAc: {
                ...this.state.FechaAc,
                [index]: value
            }        
        })
    }        
        
        if(index === "mes" && value >= 1 && value < 13)
        {
            this.setState({
                FechaAc: {
                    ...this.state.FechaAc,
                    [index]: value
                }        
            }) 
        }

        if(index === "dia" && value >= 1 && value < 32)
        {
            this.setState({
                FechaAc: {
                    ...this.state.FechaAc,
                    [index]: value
                }        
            }) 
        }
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
                                            value = {this.state.usuario.nombre}
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
                                            value = {this.state.usuario.apellido}
                                            onChange= { e => this.setValue("apellido",e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                </Form.Group>
                </Form.Row>


                <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Actualizar Día</Form.Label>
          <Form.Control type="number" placeholder="Día" required
          value = {this.state.FechaAc.dia}
          onChange= { e => this.setDate("dia",e.target.value)}
          />
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Actualizar Mes</Form.Label>
          <Form.Control type="number" placeholder="Mes" required 
          value = {this.state.FechaAc.mes}
          onChange= { e => this.setDate("mes",e.target.value)}
          />          
        </Form.Group>
            
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Actualizar Año</Form.Label>
          <Form.Control type="number" placeholder="Año" required
          value = {this.state.FechaAc.año}
          onChange= { e => this.setDate("año",e.target.value)}
          />          
        </Form.Group>  
        </Form.Row>  


<Form.Label className="texto">Actualizar Foto de perfil</Form.Label>        
        <Form.Row>        
        <Form.Group as={Col} md="5" controlId="validationCustom04">        
            <ImgPrev person={this.state.nombre}/>
  </Form.Group>  
  </Form.Row>           
   
            <br></br>
            <Button 
            variant="primary" 
            onClick = { () => 
                this.setState({ confirmation: {
                    ...this.state.confirmation, show: true
                }})                
            }            
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