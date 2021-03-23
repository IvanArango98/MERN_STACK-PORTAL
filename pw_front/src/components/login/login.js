import React from 'react';
import { Form, Button, Row, Col, Container, InputGroup} from 'react-bootstrap'
import '../login/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import NavBarProject from '../navbar/navbar'
import imagen from '../login/1.jpg'
import TransformText from "./TransformText.js";

export default class IniciarSesion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            color: "blue"
        }    
    
    }        
    render() {      
        return (    
            <>
            <NavBarProject/>                
            <Container    
            className ="container"        
            id = "InicioSesion">        
                
                {/* <style>{'body { background-color: #2B2F53; }'}</style>     */}

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
                <h2>Iniciar Sesión</h2>   
                <TransformText text="`" />

                </Row>

                
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
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>                
                <Form.Group>
                    
                </Form.Group>

                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>

                <Button id= "registro" variant="link"> Registrarse
                </Button>

                </Form>   
                
                

                </Col>
                </Row>         


                </Container>    
                </>
          );
    }
}
 
