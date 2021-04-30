import React from 'react';
import NavBarProject2 from '../navbar/navbar2'
import { request } from '../helpers/helpers'
import Loading from '../loader/loader'
import GridAcciones from './grid'
import { Container } from 'react-bootstrap';

const columnas = [
    {
    dataField: 'nombre',
    text: 'Nombre'
    }     
];

class AsignarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            curso:{
                carrera:"",
                nombre:[],
                ciclo:""
            },
            data:[],
            tempo:[],
            tempo2:[],
            data2:[],
            loading:false
         }
    }
    componentDidMount()
    {
        this.getData()
    }

    getData2(DataArray)
    {
        
        for(var i = 0;i < DataArray.length;i++)
        {            
            const url = `/detalles/${DataArray[i].nombre}` 
            
            request.get(url).then( response => {
                //console.log(response.data[0].modalidad)
                this.setState({loading:true})

                var s = response.data[0].seccion[0].replace("[","").replace("]","").split(",")                                
                if(s.length > 1)
                {
                    for(var j = 0;j< s.length;j++)
                    {
                        var array1 = {
                            nombre: response.data[0].nombre,
                            seccion: s[j],
                            modalidad: response.data[0].modalidad,
                            jornada: response.data[0].jornada                
                        }   
                        this.state.tempo2.push(array1)    
                    }
                }
                else
                {
                var array1 = {
                    nombre: response.data[0].nombre,
                    seccion: response.data[0].seccion[0],
                    modalidad: response.data[0].modalidad,
                    jornada: response.data[0].jornada                
                }
                this.state.tempo2.push(array1)    
            }
            this.setState({loading:false})
                                
            }).catch(err => {
                console.error(err)        
                this.setState({loading:false})
            })  
        }                       
    }

    getData()
    {        
    let datacarrera = JSON.parse(localStorage.getItem('sesionDataCarrera'))
    const url = `/CursosDisponibles/${datacarrera.carrera}`

    request.get(url).then( response => {
        this.setState({loading:true});
        this.setState({
            nombre: response.data[0].nombre,
            carrera: response.data[0].carrera,
            ciclo: response.data[0].ciclo
        })    

        var s = this.state.nombre[0].split(",")
        for(var i =0; i< s.length;i++)
        {
            var tempo1 = s[i].replace("[","")
            tempo1 = tempo1.replace("]","")
            var m = {nombre: tempo1}
            this.state.tempo.push(m)
        }

        this.getData2(this.state.tempo)
        this.setState({data2:this.state.tempo})
        this.setState({data:this.state.tempo2})        
        this.setState({loading:false})        
    }).catch(err => {
        console.error(err)        
        this.setState({loading:false})
    })  

    }

    render() { 
        
        return (
            <>            
                <NavBarProject2/>
                <Loading show={this.state.loading}/>
            <Container>
            <br></br>
                 <GridAcciones                
                data={this.state.data}
                columns={columnas}  
                ciclo={this.state.ciclo}              
                carrera={this.state.carrera}
                cursos={this.state.data2}
                /> 
                </Container>
                </>
          );
    }
}
 
export default AsignarCurso;