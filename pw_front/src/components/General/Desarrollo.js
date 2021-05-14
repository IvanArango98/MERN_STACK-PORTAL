import React from 'react';
import {Card,Button, Container,Row} from 'react-bootstrap'
import './Extras.css'

class Desarrollo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="ContenedorInicio2">  
            <br></br>
            <h1> Actividades Extra curriculares </h1>
            <Card className="Card1">
            <Card.Img variant="top" src="https://www.fundacioncanal.com/canaleduca/wp-content/uploads/2016/05/4_16_reportaje-850x423.jpg" />
            <Card.Body>
            <Card.Title>Deportes</Card.Title>
            <Card.Text> 
            Haz deportes :D     
            </Card.Text>            
            </Card.Body>
            </Card>

            <Card className="Card2">
            <Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg" />
            <Card.Body>
            <Card.Title>Musica</Card.Title>
            <Card.Text> 
            Aprender a tocar un instrumento :D     
            </Card.Text>            
            </Card.Body>
            </Card>

            <Card className="Card3">
            <Card.Img variant="top" src="https://blog.uniacc.cl/hubfs/Im%C3%A1genes%20para%20Blogs/2020/1-img-articulo-uniacc.jpg" />
            <Card.Body>
            <Card.Title>Danza</Card.Title>
            <Card.Text> 
            Expresa tus sentimientos. :D     
            </Card.Text>            
            </Card.Body>
            </Card>

            <Card className="Card4">
            <Card.Img variant="top" src="https://share.america.gov/wp-content/uploads/2015/06/shutterstock_199091393_revised.jpg" />
            <Card.Body>
            <Card.Title>Clubes Estudiantiles</Card.Title>
            <Card.Text> 
            Aprender a tocar un instrumento :D     
            </Card.Text>            
            </Card.Body>
            </Card>                        
            </div>
         );
    }
}
 
export default Desarrollo;