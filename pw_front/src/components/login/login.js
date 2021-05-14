import React from 'react';
import { Form, Button, Row, Col, Container, InputGroup} from 'react-bootstrap'
import '../login/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import NavBarProject from '../navbar/navbar'
import axios from 'axios'
import {APIHOST as host} from '../../App.json'
import { isNull } from 'util'
import Cookies from 'universal-cookie'
import { calculaExpiracionSesion } from '../helpers/helpers'
import Loading from '../loader/loader'


const cookies = new Cookies();

export default class IniciarSesion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            usuario: {
            mail:"",
            pass:""
            }
            ,
            loading: false,                        
            imagen: "https://upload.wikimedia.org/wikipedia/commons/5/50/Landivar_Campus_Central.jpg"
        }                 
    }  
    
    onSubmit = () => {        
        this.props.history.push('/CrearUsuario');
        }

        iniciarSesion()
        {
            this.setState({loading:true});
         
            axios.post(`${host}/login`, 
            {   mail: this.state.usuario.mail,
                pass: this.state.usuario.pass
            }).then( response => {
                if(isNull(response.data.token))
                {
                    alert("Usuario y/o contraseña invalido")
                }
                else{
                    cookies.set("_s",response.data.token,{
                        path: "/", 
                        expires: calculaExpiracionSesion()
                    })
                    localStorage.setItem("sesionData",JSON.stringify({            
                        email: this.state.usuario.mail        
                    }))
                window.location.href = "/Portal";
                
                }
                this.setState({loading:false});
            }).catch(err => {
                console.error(err)
                this.setState({loading:false});
                alert(err)
            })
                   
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

    render() {  

        return (    
            <>
            <div className="PrincipalLog">
            <NavBarProject/>
            <Loading
            show = {this.state.loading}
            />
            
            <Container    
            className = "container-IniciarSesion" 
            id = "InicioSesion"             
           >                                                          
                                 
                <Col
                sm="12"
                xs="12"
                >
                

                <Row>
                <h2>Iniciar Sesión</h2>                   
                </Row>

                <br/><br/>                
                <Form>                
                <Form.Row>
                    <Form.Group as={Col}>

                    <Form.Label>Enter Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faUser}/> 
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Email address"
                                onChange= { e => this.setValue("mail",e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>Enter password</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faLock}/> 
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange= { e => this.setValue("pass",e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>                
                <Form.Group>
                    
                </Form.Group>

                <Button variant="primary" type="submit"
                 onClick={() => this.iniciarSesion() }
                >
                    Iniciar Sesión
                </Button>

                <Button id= "registro" variant="link"
                onClick={this.onSubmit}
                > Registrarse
                </Button>

                </Form>   
                
                

                </Col>
                                                     
                </Container>   
                <p style={{color:"white",marginTop:"-214px",marginBottom:"1px"}} ><span>2021 © - URL - Derechos Reservados </span></p>               
                </div>  
                </>
          );
    }
}
 
