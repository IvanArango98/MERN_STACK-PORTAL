import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import DataGrid from '../Portal/Grid'


const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true
  }, {
    dataField: 'nombre',
    text: 'Nombre'
  }
  , {
      dataField: 'seccion',
      text: 'Sección'
    }
    , {
      dataField: 'jornada',
      text: 'Jornada'
    },
    {
      dataField: 'modalidad',
      text: 'Modalidad'
    }
    
  ];

  class CursosUsuarios extends React.Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
              componentDidMount(){          
    }

      render() { 
          return (
            <div className="Cursos">
            <Container id="Cursos-container">
            
                <h2>Cursos Asignados</h2>
                <hr></hr>                            
            <Row> 
              <Col>
            <div >            
            <DataGrid
                url="/Portal"
                columns={columns}
            />
            </div>
            </Col>          
            </Row>

            </Container>
            </div>
            );
      }
  }
   
  export default CursosUsuarios;
