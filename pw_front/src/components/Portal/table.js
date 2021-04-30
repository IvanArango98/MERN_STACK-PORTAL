import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import DataGrid from '../Portal/Grid'
import './Portal.css'
import Cookies from 'universal-cookie'
import { calculaExpiracionSesion } from '../helpers/helpers'

const cookies = new Cookies();
const dataSesion = JSON.parse(localStorage.getItem('sesionData'))        

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
          this.state = {                         
           }
          this.onClickEditButton = this.onClickEditButton.bind(this)          
      }          
    
    onClickEditButton(row)
    {                              
            cookies.set("_c",`${btoa(row.nombre)}`,{
                path: "/", 
                expires: calculaExpiracionSesion()
            })
            window.location.href = "Portal/Curso";        
    }
     
      render() { 
        {
          
        }
          return (
            <div className="Cursos">
              
            <Container id="Cursos-container">
            <hr></hr>       
                <h2>Cursos Asignados</h2>
                <hr></hr>                            
            <Row> 
              <Col>
            <div >            
            <DataGrid        
                url={`/Portal/${dataSesion.email}`}        
                columns={columns}
                mensaje="Interciclo -  2021"
                onClickEditButton={this.onClickEditButton}
                showEditButton= {true}
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
