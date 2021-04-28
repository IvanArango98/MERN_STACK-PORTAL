import React from 'react';
import { Navbar, Dropdown, Nav, DropdownButton} from 'react-bootstrap'
import './navbar.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagen from '../navbar/url.jpg'


export default class NavBarProject2  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {              
            name : ""
        }
                
    }
  
    logout()
    {               
        window.location.href = `/Portal`;             
    }
    
    render() {         
        return ( 
            <Navbar className="color-nav" id="navbar" variant="light">
            <Navbar.Brand href="">
            <img src={imagen} alt=""/>
                <span id="navbar-sub-brand"></span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              {/*  <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>*/}               
              </Nav>             
              <DropdownButton drop="left" title="">                                                       
                    <Dropdown.Item 
                        onClick={ () => this.logout()}>                        
                         
                          <FontAwesomeIcon icon={faArrowLeft}/> 
                          {
                          " "+" " +"Regresar"                         
                         }
                    </Dropdown.Item>                    
                    </DropdownButton>
            </Navbar.Collapse>
          </Navbar>

         );
    }
}
 