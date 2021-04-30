import React from 'react';
import { Modal } from 'react-bootstrap'
import './prompts.css'
import {isUndefined, isNull } from 'util'
import { Form, Button, Row, Col, Container, InputGroup,Image} from 'react-bootstrap'

export default class Actualizar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            show: false

         }
    }

    onExitedMessage()
    {
       window.location.href = "/Portal/EditarPerfil"
    }
    componentWillReceiveProps(nextProps)
    {
        if( nextProps.show  )
        {   
            this.setState({ show:true }, this.hideMessage)
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

    render() { 
        return (  
            <Modal  
            id="message-prompt"                      
            centered
            show={this.state.show}
            onExited={() => this.onExited() }
            >            
            <Modal.Body>
            <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              //onChange={handleChange}                               
              id="validationFormik107"
              feedbackTooltip
            />            
            <Button variant="link" onClick={() => this.onExitedMessage()}>Cerrar</Button>
             </Form.Group>             
            </Modal.Body>    

          </Modal>



        );
    }
}