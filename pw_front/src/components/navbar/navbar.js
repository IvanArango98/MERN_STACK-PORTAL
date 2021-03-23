import React from 'react';
import { Navbar, Dropdown, Row, Nav, DropdownButton, Image} from 'react-bootstrap'
import './navbar.css'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagen from '../navbar/url.jpg'

export default class NavBarProject  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                    <DropdownButton id="color-nav2" drop="left" variant="light">
                    <Dropdown.Header id="Dropdown-header">
                        <Row>
                        <FontAwesomeIcon icon={faUserCircle} />
                        </Row>
                        <Row>
                            #USERNAME#
                        </Row>                    
                    </Dropdown.Header> 
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item 
                        onClick={ () => this.logout()}                 
                    >Cerrar Sesión</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </DropdownButton>
            </Navbar.Collapse>
          </Navbar>

         );
    }
}
 