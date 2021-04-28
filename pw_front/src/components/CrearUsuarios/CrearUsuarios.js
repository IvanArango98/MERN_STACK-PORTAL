import React from 'react';
import '../CrearUsuarios/CrearUsuarios.css'
import { Form, Button, Row, Col, Container, InputGroup} from 'react-bootstrap'
import imagen from '../login/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock, faEnvelope, faCalendar, faUserCircle, faUserTie} from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { saveUsuario as request } from '../helpers/helpers'
import NavBarProject from '../navbar/navbar'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loader/loader'

var carrera =""
export default class CrearUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {                                       
            usuario: {
            nombre: "",
            apellido: "",
            mail: "",
            pass: "" ,        
            FechaNacimiento:new Date(),
            image: null            
            }           
            ,            
            redirect: false,
            loading: false,
            carrera: ``                         
          }                               
          this.handleChange = this.handleChange.bind(this);
          this.onExitedMessage = this.onExitedMessage.bind(this)
    }
    

    handleChange(date) {
        this.setState({
          FechaNacimiento: date
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
  
    onFileChange = event => { 
        // Update the state 
        this.setState({ image: event.target.files[0] }); 
      }; 
   
      // On file upload (click the upload button) 
      onFileUpload = () => { 
          try{

          
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.image, 
          this.state.image.name 
        ); 
        this.setValue("image",this.state.image)
          }
          catch
            {                
                alert("debe de ingresar imagen")
            }         
      }; 
     
      guardarUsuario()
      {   
        this.setState({loading: true}) 
        this.onFileUpload()                         
        let users = {
            nombre: this.state.usuario.nombre,
            apellido: this.state.usuario.apellido,
            mail: this.state.usuario.mail, 
            pass: this.state.usuario.pass,
            FechaNacimiento: this.state.FechaNacimiento,
            image: this.state.image,
            carrera: carrera
        } 
        let val = this.Validar(users.mail) 
        
        var e = document.getElementById("mySelect");
                                        
        if(e.selectedIndex !== 0)
        {            
        if(users.nombre !== null || users.apellido !== null || users.mail !== null || users.pass !== null || users.FechaNacimiento !== null || 
            users.image !== null)             
            {
        if(val === false )
        {
            this.setState({loading:true});
            request(users)
            this.setState({loading:false});
            console.log(users)        
            this.props.history.push('/login');          
        }              
        else{
                alert("Debe de ingresar un correo electronico valido.")
        }
        
        }
        
        else{
            alert("Debe de llenar todos los campos.")
        } 
    }
    else
    {
        alert("Debe de seleccionar una carrera.")
    } 
                
     
      }

      Validar(mail)
      {
          let condicion = false
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
            if ( re.test(mail) ) {
                condicion = false                     
            }
            else {
                condicion = true                               
            }                    
            return condicion
        }
      
      
      onSubmit = () => {
        
        this.props.history.push('/login');
        }

        onExitedMessage()
        {
            if(this.state.redirect)
            {
                this.onSubmit()
            }
        }
  
    render()
        {  
            
            function myFunction() {
                var e = document.getElementById("mySelect");
                var result = e.options[e.selectedIndex].text +"";
                //this.setState({carrera:result})             
                carrera = result;
              }  

              
        return ( 
            <>   
              
            <NavBarProject/>    
            <Loading
            show = {this.state.loading}
            />
                            
            <Container    
            className ="CrearUsuario"        
            id = "Crear">        
                
                <style>
                    {
                     `body { background-image: url(${imagen})}`
                    }
                </style>     
                <Row>                    
                <Col
                sm="12"
                xs="12"
                >
                

                <Row>
                <h2>Crear Usuario</h2>                                   
                </Row>
                <br/><br/>

                
                <Form>     


                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                {/* <Form.Label>Ingrese nombre</Form.Label> */}
                <Form.Group as={Col}>                    
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUser}/> 
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombre"
                                            onChange= { e => this.setValue("nombre",e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                {/* <Form.Label>Ingrese apellido</Form.Label> */}
                <Form.Group as={Col}>                    
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUser}/> 
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Apellido"
                                            onChange= { e => this.setValue("apellido",e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Group as={Col}>                    
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faEnvelope}/> 
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                onChange= { e => this.setValue("mail",e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Group as={Col}>                    
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
                </Form.Group>
                </Form.Row>
                

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                {/* <Form.Label>Ingrese Fecha de Nacimiento</Form.Label> */}
                   <Form.Group as={Col}>   
                <InputGroup.Text>
                <FontAwesomeIcon icon={faCalendar}/>                                 
                <Col>                                
                <DatePicker
                placeholderText ="Fecha Nacimiento"               
                selected={this.state.FechaNacimiento}
                onChange={this.handleChange}      
                dateFormat="MM/dd/yyyy"
                />
                </Col>    
                                   
                </InputGroup.Text>                 
                      </Form.Group>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                {/* <Form.Label>Seleccione foto de perfil</Form.Label> */}
                  <Form.Group as={Col}> 
                 <InputGroup.Text>
                 <FontAwesomeIcon icon={faUserCircle}/> 
                 <Col>                 
                   <Form.File id="exampleFormControlFile1" 
                   onChange={this.onFileChange}            
                   accept="image/png, image/jpeg"                   
                   />
                 </Col>
                 </InputGroup.Text> 
                 </Form.Group>
                </Form.Group>
            </Form.Row>
                                        
                <Form.Row>                  
                 <Form.Group as={Col}>                  
                 <InputGroup.Text >
                 <FontAwesomeIcon icon={faUserTie}/>                                   
                 <Col>                                  
                 <Form.Control
        as="select"
        className="mr-sm-2"
        onChange={() => myFunction()}
        id="mySelect"       
        custom                
      >
        <option value="0">Seleccione carrera</option>
        <option value="1">Ingeniería en informatica y sistemas</option>        
        <option value="2">Ingeniería Industrial</option>
        <option value="3">Medicina</option>
        <option value="4">Derecho</option>   
      </Form.Control>
                
                </Col>
                 </InputGroup.Text> 
                 </Form.Group>
                </Form.Row> 


                <Button variant="primary" type="submit"
                 onClick = { () =>                     
                    this.guardarUsuario()                
                }      
                //onClick={this.onFileUpload}
                >                      
                Crear Usuario                
                </Button>                              

                 <Button variant="link" type="submit"
                onClick={this.onSubmit}
                >                    
                 Regresar                
                </Button>                

                </Form>                                   

                </Col>
                </Row>         


                </Container>    
                </>
         );
    }
}
 
 