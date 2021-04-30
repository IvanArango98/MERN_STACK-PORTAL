import React from 'react';
import { Container, Image, Row, Col , Nav,Card,ListGroup,Accordion,Button} from 'react-bootstrap';
import './Portal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faReceipt,faBriefcase,faAddressBook,faTrashAlt,faUserEdit } from '@fortawesome/free-solid-svg-icons'


function ValidarCard(tipo)
{
    if(tipo === "cursos")
    {
    return (  
        <Card className="Acordion-card">
            <Card.Header>
                <ListGroup variant="flush">
                    <br></br>   
                <ListGroup.Item>
                <Card.Link onClick={Asignar} style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faAddressBook}/> 
                        <br></br>
                    Asignar Curso
                </Card.Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                <Card.Link onClick={EditarPerfil} style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faUserEdit}/> 
                        <br></br>
                    Editar Perfil
                </Card.Link>
                    </ListGroup.Item>   


                    <ListGroup.Item>
                <Card.Link href={`https://biblioteca.url.edu.gt/`}>                
                <FontAwesomeIcon icon={faBook}/> 
                        <br></br>
                    Biblioteca Virtual                    
                </Card.Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                <Card.Link onClick={Pagar} style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faReceipt}/> 
                        <br></br>
                    Pago con tarjeta de credito/debito                   
                </Card.Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                <Card.Link onClick={Retirar} style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faTrashAlt}/> 
                        <br></br>
                    Retirar Curso                
                </Card.Link>
                    </ListGroup.Item>   

            </ListGroup>
            
            </Card.Header>

        </Card>
        
         )
    }
    else if(tipo==="datos")
    {
        return(
            <Card className="Acordion-card">
            <Card.Header>
                <ListGroup variant="flush">
                    <br></br>   
                <ListGroup.Item>
                <Card.Link onClick={Asignar} style={{cursor:"pointer"}}>
                <FontAwesomeIcon icon={faAddressBook}/> 
                        <br></br>
                    Asignar Curso
                </Card.Link>
                    </ListGroup.Item>  
            </ListGroup>
            
            </Card.Header>

        </Card>   
        )
    }
}

function   Pagar()
{
    alert("Programar pagar")
}

function Asignar()
{

    window.location.href = "/Portal/AsignarCurso";    
}

function Retirar()
{
    window.location.href = "/Portal/RetirarCurso"    
}

function EditarPerfil()
{
    window.location.href = "/Portal/EditarPerfil"    
}

 


class AcordionOp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
      
    }

    render() {      
                             
        return (  
                <div>
                    {
                        ValidarCard(this.props.Tipo)                        
                    }
                </div>                            
         );
    }
}
 
export default AcordionOp;


 
