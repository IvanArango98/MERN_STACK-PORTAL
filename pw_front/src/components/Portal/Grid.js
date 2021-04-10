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

export default class DataGrid  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            rows: [],
            loading:false,
            mensaje: "",
            pass: "", 
         
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
        request.get(this.props.url).then( response => {
            this.setState({rows: response.data })
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

