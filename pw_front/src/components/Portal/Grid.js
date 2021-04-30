import React from 'react';
import { Row, Col, Button} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,{PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { request } from '../helpers/helpers'
import Loading from '../loader/loader'
import './Portal.css'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isUndefined} from 'util'

const { SearchBar } = Search;

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default class DataGrid  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            rows: [],
            loading:false,
            mensaje: "",
            pass: "", 
            correo_usuario:"" ,
            tempo:[],
            tempo2:[]         
        }
                
             
        if(this.props.showEditButton && !this.existsColumn("Navegar"))
        {
            this.props.columns.push(this.getEditButton())
        }                                

    }
    componentDidMount()
    {
                
        this.getData()
    }
  
    
    getData()
    {        
        this.setState({loading:true});
        this.setState({mensaje:this.props.mensaje});        
        const dataSesion = JSON.parse(localStorage.getItem('sesionData'))        
        
            request.get(this.props.url).then( response => {                    
            this.state.tempo2.push(response.data)                     
            
            if(this.props.url !== `/Portal/${dataSesion.email}`) 
            {
                var myarray = {
                    _id: response.data._id,
                    nombre: response.data.nombre,
                    apellido: response.data.apellido,
                    mail: response.data.mail,
                    FechaNacimiento: formatDate(response.data.FechaNacimiento),
                }                          
                    this.state.tempo.push(myarray)  
                    this.setState({rows: this.state.tempo})   
                   
            }
            else
            {
               for(var i = 0; i < this.state.tempo2[0].length;i++)
                {                                         
                    var myarray = {
                    _id: this.state.tempo2[0][i]._id,
                    nombre: this.state.tempo2[0][i].nombre,
                    seccion: this.state.tempo2[0][i].seccion,
                    jornada: this.state.tempo2[0][i].jornada,
                    modalidad: this.state.tempo2[0][i].modalidad}            
                    this.state.tempo.push(myarray)                                                            
                }        
                console.log(this.state.tempo2[0])
               this.setState({rows: this.state.tempo}) 
            }

            this.setState({loading:false});            

        }).catch(err => {
            console.error(err)
            this.setState({loading:false});
        })                                   
    }


    getEditButton()
    {
        return{
            text: 'Navegar',
            formatter: (cell, row) => {
                //console.log(row)
                return <Button
                    onClick={ () => this.props.onClickEditButton(row) }                    
                >
                    <FontAwesomeIcon icon={faArrowAltCircleRight}/>                    
                </Button>
            }          

        }
    }

    existsColumn(colText)
    {
        let col = this.props.columns.find( column => column.text === colText)
        return !isUndefined(col)
    }
  
    
   render() { 

        const options = {
            custom: true,
            totalSize: this.state.rows.lenght
        };

        return (  
            <>
             <Loading
                show = {this.state.loading}
                />
<ToolkitProvider
            keyField="tp"
            data={this.state.rows}
            columns={this.props.columns}
            search
            >
                {
                    props => 
                 (
                    <>                                                                    
                        <PaginationProvider 
                            pagination={ paginationFactory(options) }
                    >
                        {
                        ({
                            paginationProps,
                            paginationTableProps
                        }) => (
                                <>    
                                <Row style={{width: "100%"}}   >
                                    <Col> 
                                    <SizePerPageDropdownStandalone
                                { ...paginationProps}                              
                                />
                                    </Col>
                                    <Col> 
                                    <SearchBar { ...props.searchProps}    /> 
                                    </Col>
                                </Row>
                                <hr></hr>
                                <div className="marginar">
                                <h4>{this.state.mensaje}</h4>                                
                                </div>

                                <h3>{this.props.mensaje}</h3>
                                <br></br>
                                <BootstrapTable
                               
                                keyField="bt"
                                data={this.state.rows}
                                columns= { this.props.columns }
                                { ...paginationTableProps}    
                                { ...props.baseProps}                                                        
                                />                                                  
                                <PaginationListStandalone
                                { ...paginationProps}
                                />
                        </>
                         )
                        }                    
                    </PaginationProvider>                      
                    </>
    )
                }
                
            </ToolkitProvider>

            </>
        
        );
    }
}

