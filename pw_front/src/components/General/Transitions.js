import React from 'react';
import {Card,Button, Container,Row} from 'react-bootstrap'
import './Extras.css'
class Transitions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Transitions">
                <br></br>
                <h1>¿Qué quieres estudiar?</h1>
                    <Card className="Card1T">
                        <br></br>
                        <br></br>
                    <Card.Body className="CRT">
                        <Card.Title>Licenciatura</Card.Title>
                        <hr></hr>                        
                        <Card.Text>
                        Estudia una licencitura.
                        </Card.Text>
                        <hr></hr>                                                
                        <Card.Link href="https://principal.url.edu.gt/academia/admisiones/"><Button variant="outline-light">Más Información</Button></Card.Link>                        
                    </Card.Body>                    
                    </Card>

                    <Card className="Card2T">
                        <br></br>
                        <br></br>
                    <Card.Body className="CRT">
                        <Card.Title>Maestría</Card.Title>
                        <hr></hr>                        
                        <Card.Text>
                        Estudia una Maestría.
                        </Card.Text>
                        <hr></hr>                                                
                        <Card.Link href="https://principal.url.edu.gt/academia/admisiones/"><Button variant="outline-light">Más Información</Button></Card.Link>                        
                    </Card.Body>
                    </Card>

                    <Card className="Card3T">
                        <br></br>
                        <br></br>
                    <Card.Body className="CRT">
                        <Card.Title>Cursos Libres</Card.Title>
                        <hr></hr>                        
                        <Card.Text>
                        Estudia un curso libre de tu aréa preferida.
                        </Card.Text>
                        <hr></hr>                                                
                        <Card.Link href="https://principal.url.edu.gt/academia/admisiones/"><Button variant="outline-light">Más Información</Button></Card.Link>                        
                    </Card.Body>
                    </Card>
            </div>
          );
    }
}
 
export default Transitions;