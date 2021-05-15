import React from 'react';
import NavBarProject2 from '../navbar/navbar2'
import { request } from '../helpers/helpers'
import Loading from '../loader/loader'
import { Row, Col, Button,Card,ListGroup, Container,Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './acciones.css'
import ConfirmationPrompt from '../prompts/confirmar'


class RetirarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            tempo2:[],
            tempo:[],
            data:[],
            loading: false,
            message: {
                text:"",
                show:false
            }    ,
            carrera:"",
            confirmation: {
                titulo:"Retirar Curso",
                texto:"¿Desea retirar el curso",
                show:false  ,
                id:""             
            }
        }

        this.onCancel = this.onCancel.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
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
        },  this.RetirarCurso());   
    }

    RetirarCurso()
    {
        request.delete(`/Portal/${this.state.confirmation.id}`).then( response => { 
            alert(response.data.msg + "")  
            window.location.href = "/Portal/RetirarCurso"
        }).catch(err => {
            console.error(err)     
            alert(err + "")       
            this.setState({loading:false});
        })          
    }
    componentDidMount()
    {
        this.getData()
        let datacarrera = JSON.parse(localStorage.getItem('sesionDataCarrera'))
        this.setState({carrera:datacarrera.carrera})        
    }

    
    onExitedMessage()
    {
        window.location.href = "/Portal/RetirarCurso";    
    }


    getData()
    {
        const dataSesion = JSON.parse(localStorage.getItem('sesionData'))        
        request.get(`/Portal/${dataSesion.email}`).then( response => {              
            
            this.state.tempo2.push(response.data)  
            this.setState({loading:true})
            for(var i = 0; i < this.state.tempo2[0].length;i++)
            {                                         
                var myarray = {
                _id: this.state.tempo2[0][i]._id,
                nombre: this.state.tempo2[0][i].nombre,
                seccion: this.state.tempo2[0][i].seccion,
                jornada: this.state.tempo2[0][i].jornada,
                modalidad: this.state.tempo2[0][i].modalidad
            }            
                this.state.tempo.push(myarray)                                                            
            }        

            this.setState({data:this.state.tempo})
            
            this.setState({loading:false})

        }).catch(err => {
            console.error(err)            
            this.setState({loading:false});
        })        
    }
    

    render() { 
        const renderCard = (card,index) =>
        {           
                        
              return(                                      
                <Card style={{ width: '65rem',borderColor:"#06638D" }}>                
                  <Card.Body>
                <Card.Title>{"Curso: " + card.nombre}</Card.Title>                
                <Card.Subtitle className="mb-2 text-muted">
                {"Jornada: "+card.jornada + ", Sección: " + card.seccion }
                </Card.Subtitle>                
                {"Retirar curso"}
                <FontAwesomeIcon icon={faTrashAlt}  
                onClick = { () => this.setState({ confirmation: {...this.state.confirmation, show: true,id:card._id}})}
                style={{cursor:"pointer",marginLeft:"15px"}}/>                
                </Card.Body>                
              </Card>                                          
              )            
        }
     
        return ( 
            <div>
                <NavBarProject2/>
                <Loading show={this.state.loading}/>                                              

                <ConfirmationPrompt
                    show={this.state.confirmation.show}
                    titulo={this.state.confirmation.titulo}
                    texto={this.state.confirmation.texto}
                    onCancel={ this.onCancel }
                    onConfirm={ this.onConfirm }
                />

                <br></br>
                <Container>
                <h2>Retiro Academico Interciclo - 2021</h2>                
                <h2>{this.state.carrera}</h2>
                <br></br>
                {this.state.data.map(renderCard)}   
                </Container>
            </div>
         );
    }
}
 
export default RetirarCurso;