import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie'
import {request} from '../helpers/helpers'
import { Container } from 'react-bootstrap';
import DataGrid from '../Portal/Grid'

const cookies = new Cookies();

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true
  }, {
    dataField: 'nombre',
    text: 'Nombre'
  }
  , {
      dataField: 'apellido',
      text: 'Apellido'
    }
    ,
    {
        dataField: 'mail',
        text: 'Correo electronico'
      },            
    {
      dataField: 'FechaNacimiento',
      text: 'Fecha de Nacimiento'
    }    

  ];

export default  class DatosUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }   
  
    render() { 
        return (
            <div>
                <Container>
            <hr></hr>
            <DataGrid
            url="/Usuario"
            columns={columns}
            mensaje="Datos Estudiante"
        />
        </Container>
        </div>  
        );
    }
}
 
