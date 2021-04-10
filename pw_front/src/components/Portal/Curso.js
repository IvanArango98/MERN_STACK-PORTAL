import React from 'react';
import NavBarProject2 from '../navbar/navbar2'
import Cookies from 'universal-cookie'
import { Container } from 'react-bootstrap';

const cookies = new Cookies();


class ContenidoCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let token = cookies.get("_c")
        let nombre = (atob(token.split("%")))
        return (
            <>
            
            <NavBarProject2/>
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
