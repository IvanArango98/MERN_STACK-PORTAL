import React from 'react';
import { Navbar, Dropdown, Nav, NavDropdown,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBalanceScale,faHardHat} from '@fortawesome/free-solid-svg-icons'

import './navbar.css'

class NavBarInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{zIndex: "2000",opacity:"0.9",backgroundColor:"#483D8B",position:"fixed",width:"100%",height:"100px"}}>
            <Navbar.Brand href="/principal">
            <img src="https://www.url.edu.gt/PortalEstudiantes/Images/logo_url_transparente.png"/>
            </Navbar.Brand>            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" style={{}}>               
            <Nav.Link href="/principal">INICIO</Nav.Link>
            <Nav.Link href="#pricing">ACERCA DE</Nav.Link>
            <NavDropdown title="CARRERAS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faHardHat}/> {"INGENIERÍA"}</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><i class="fa fa-user-md" aria-hidden="true"></i> {"MEDICINA"} </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><FontAwesomeIcon icon={faBalanceScale}/> {"DERECHO"}</NavDropdown.Item>                     
            </NavDropdown>
            <Nav.Link href="https://biblioteca.url.edu.gt/">BIBLIOTECA</Nav.Link>
            <Nav.Link href="https://principal.url.edu.gt/agenda/">AGENDA</Nav.Link>
            <Nav.Link href="https://principal.url.edu.gt/noticias/">NOTICIAS</Nav.Link>                      
    </Nav>
    <Nav>
      <Nav.Link href="/login">
      <Button variant="light" style={{color:"white",backgroundColor:"#191970",width:"200px",height:"40px"}}>
      <FontAwesomeIcon icon={faUser}/>
        {        
        "INGRESAR" 
        }        
        </Button>
        </Nav.Link>      
    </Nav>
  </Navbar.Collapse>
</Navbar>

         );
    }
}
 
export default NavBarInicio;