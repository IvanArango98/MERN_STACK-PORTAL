import React from 'react';
import { Navbar, Dropdown, Nav, DropdownButton} from 'react-bootstrap'
import './navbar.css'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagen from '../navbar/url.jpg'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class NavBarProject  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {              
            name : ""
        }
                
    }
  
    logout()
    {
        cookies.remove("_s")        
        cookies.remove("_curso")        
        localStorage.clear();
        window.location.reload();
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
                         
                          <FontAwesomeIcon icon={faSignOutAlt}/> 
                          {
                          " "+" " +"Cerrar Sesión"                         
                         }
                    </Dropdown.Item>                    
                    </DropdownButton>
            </Navbar.Collapse>
          </Navbar>

         );
    }
}
 