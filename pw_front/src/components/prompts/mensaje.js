    import React from 'react';
import { Modal,Card,Button} from 'react-bootstrap'
import './prompts.css'
import {isUndefined, isNull } from 'util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import { request } from '../helpers/helpers'


export default class MessagePrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,            
            message: {
                text:"",
                show:false
            }   
         }
    }

    componentWillReceiveProps(nextProps)
    {
        if( nextProps.show  )
        {   
            this.setState({ show:true }, this.hideMessage)
            this.setState({secciones: this.props.data})
        }        
    }
    


    
    hideMessage()
    {
     setTimeout(() => {
        this.setState({show:false})
     }, this.props.duration);
          
    }

    onExited()
    {
        if( !isUndefined(this.props.onExited) && !isNull(this.props.onExited))
        {
            this.props.onExited()
        }
    }
    validar(correo_usuario, nombre,myarray)
    {
        var bandera = false;
        request.get(`/Portal/${correo_usuario}`).then( response => {
            
            for(var i = 0; i <response.data.length;i++)
            {
                if(correo_usuario === response.data[i].correo_usuario && nombre === response.data[i].nombre)
                {
                    bandera = true;                                                                                               
                    break;
                }
            }
            if(bandera)         
            {
                alert("Curso asignado previamente.")
                this.Salir()    
            }
            if(!bandera)      
            {
            this.AsignarCurso(myarray)    
            }
        }).catch(err => {
            console.error(err)
            this.setState({loading:false});
        })
        
    }
    Asignar(seccion)
    {
        var correo = JSON.parse(localStorage.getItem('sesionData'))                
        var nombre = this.props.nombre

        for(var i =0;i < this.props.data.length;i++)
        { 
                        
            if(this.props.data[i].seccion.replace("[","").replace("]","") === (seccion+"") && this.props.data[i].nombre === nombre)
            {
                var myarray = { 
                 nombre: nombre,
                 correo_usuario: correo.email,                 
                 jornada: this.props.data[i].jornada[0].replace("[","").replace("]",""),
                 seccion: seccion,
                 modalidad: this.props.data[i].modalidad.toString()  
                }               
            this.validar(correo.email,nombre,myarray)                                            
             break;                                      
            }                        
        }
        
    }

    AsignarCurso(myarray)
    {
        console.log(myarray)
        
        request.post("/Portal",myarray).then( response => 
            {                
                if(response.data.exito)
                {                 
                 this.setState({
                     redirect: response.data.exito,
                    message: {                        
                        text: response.data.msg,
                        show:true
                    }
                 })

                 alert(response.data.msg + "")                 
                 window.location.href = "/Portal/AsignarCurso";
                }
                                
            }).catch(err => 
                {
                    this.setState({loading: false})
                    alert(err + "")   
                })
    }

    Salir()
    {
        window.location.href = "/Portal/AsignarCurso";
    }

    render() { 

        function myarray()
        {            
            var myarray = [JSON.parse(localStorage.getItem('seccion'))]                         
            return myarray[0].seccion                   
        }
        const renderCard2 = (card,index) =>
        {
              return(                    
                <Card style={{ width: '15rem' }}>
                 <Card.Header>{"Sección: " + (index+1)}                 
                 <FontAwesomeIcon icon={faClipboardCheck} style={{cursor:"pointer",marginLeft:"15px"}}
                 onClick={()=>this.Asignar(index+1)}
                 />                 
                 </Card.Header>                   
              </Card>                                                        
              )
        }  
                    
        return (                   
            <>

            <Modal  
            id="message-prompt"                      
            centered
            show={this.state.show}
            nombre={this.state.nombre}
            onExited={() => this.onExited() }
            >            
            <Modal.Body>                 
            {myarray().map(renderCard2)}                  
            <Button variant="info" style={{width:"240px"}}
            onClick={() => this.Salir()}
            >Salir</Button> 
            </Modal.Body>                           
          </Modal>
          </>

        );
    }
}