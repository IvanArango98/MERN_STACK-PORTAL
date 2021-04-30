import React from 'react';
import { Row, Col, Button,Card,ListGroup, Container,Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import MessagePrompt from '../prompts/mensaje'
import './acciones.css'

function empty(list) {
    //empty your array
    list = []
    return list
}

class GridAcciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            confirmation: {
                titulo:"Asignación",
                texto:"¿Deseas modificar el empleado?",
                show:false               
            }  ,
            message: {
                text:"",
                show:false
            }        ,
            test:[],
            data1:[]
         }        
        
    }
        componentDidMount()    
        {
         //console.log(this.props.data)
        }

    
        onExitedMessage()
        {
            window.location.href = "/Portal/AsignarCurso";    
        }
   
        
 asignar(data,nombre)
{    

    var myarray = []

    for(var i = 0; i < data.length;i++)
    {
        
        if(nombre === data[i].nombre)
        {
            myarray.push(data[i].seccion)
        }
    }        

        localStorage.setItem("seccion",JSON.stringify({
            seccion: myarray
        }))   
                        
              
    this.setState(
        {
            nombre: nombre
        ,message: {
            //mensaje que viene del backend
            text: `Asignación ${nombre}`,
            show:true            
        }})
}

    render() { 
        
        const renderCard = (card,index) =>
        {            
              return(                    
                <Card style={{ width: '65rem',height:"60px"}}>
                 <Card.Header>
                {"Curso: " + card.nombre}                
                 <FontAwesomeIcon icon={faClipboardCheck} onClick={() => this.asignar(this.props.data,card.nombre)} style={{cursor:"pointer",marginLeft:"15px"}}/>
                 </Card.Header>  
              </Card>                                          
              )
        }
     

        return ( 
            <>            
                    <Container>
                    <MessagePrompt
                    text= {this.state.message.text}
                    show= {this.state.message.show}
                    duration={20500} 
                    onExited= {this.onExitedMessage}
                    nombre={this.state.nombre}
                    data={this.props.data}                    
                />                      

                    <h2>{"Asignaciones " + this.props.ciclo}</h2>   
                    <h2>{this.props.carrera}</h2>    
                    <br></br>
                    {this.props.cursos.map(renderCard)}                                         
                    <br></br>
                    </Container>                                                                  
            </>
         );
    }
}
 

export default GridAcciones;