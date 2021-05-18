import React from 'react';
import NavBarProject2 from '../navbar/navbar2'
import Cookies from 'universal-cookie'
import { Container } from 'react-bootstrap';
import './Curso.css'

const cookies = new Cookies();

class ContenidoCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let tokenS = cookies.get("_c")
        let nombre = (atob(tokenS.split("%")))

        return (
            <>
            
            <NavBarProject2/>
            <div class="sidebar">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
            <Container>

                <h2>
                    {
                        "Bienvenido al curso de " + nombre   
                    }
                </h2>
            </Container>
            </>
          );
    }
}
 
export default ContenidoCurso;
