import React from 'react';
import NavBarProject2 from '../navbar/navbar2'
import {Container} from 'react-bootstrap'
class CalendarioPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
            <NavBarProject2/>
            <Container>
            <h2>Que onda we</h2>
            </Container>
            </div>
        );
    }
}
 
export default CalendarioPortal;