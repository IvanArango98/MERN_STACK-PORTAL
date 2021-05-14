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
  
    onClickImg()
    {
        window.location.href = "/principal";
    }


    render() {         
        return ( 
            <Navbar className="color-nav" id="navbar" variant="light">
            <Navbar.Brand href="">
            <img src="https://www.url.edu.gt/PortalEstudiantes/Images/logo_url_transparente.png" alt=""
            onClick={()=> this.onClickImg()}
            style ={{ cursor:"pointer",marginLeft:"30px",width:"250px",height:"100px"}}            
            />
                <span id="navbar-sub-brand"></span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              {/*  <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>*/}               
              </Nav>                         
            </Navbar.Collapse>
          </Navbar>

         );
    }
}
 