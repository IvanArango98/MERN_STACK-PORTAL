import React from 'react';
import {Card,ListGroup} from 'react-bootstrap'

class FooterP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            image:"https://c.tile.openstreetmap.org/16/16295/30081.png",
            rows: {card1: 1,card2: 2,card3: 3, card4 : 4}
        }
    }

    onClickiMG(opcion)
    {
        if(opcion === 1)
        {
            this.setState({image:"https://c.tile.openstreetmap.org/16/16295/30081.png"})
        }
        if(opcion === 2)
        {
            this.setState({image:"https://a.tile.openstreetmap.org/16/16107/30035.png"})
        }

        if(opcion === 3)
        {
            this.setState({image:"https://a.tile.openstreetmap.org/12/1019/1870.png"})
        }
        if(opcion === 4)
        {
            this.setState({image:"https://c.tile.openstreetmap.org/16/16114/29945.png"})
        }
        if(opcion === 5)
        {
            this.setState({image:"https://b.tile.openstreetmap.org/16/16241/30133.png"})
        }

        if(opcion === 6)
        {
            this.setState({image:"https://b.tile.openstreetmap.org/16/16468/30007.png"})
        }
        
    }
    render() { 

        return ( 
            <>
            <div className="Container"
            style={{                                 
                color: "#ffd971",                          
                backgroundColor: "#191970",
                position: "absoluted",
            }}  
            >
            <div className="Columna1" style={{marginRight:"200px",marginTop:"-10px"}}>
                <br></br>
              <h2 style={{marginRight:"30px"}} >Ubicaciones</h2> 
              <br></br>                                 
            </div>

            <div style={{marginLeft:"490px",cursor:"pointer",marginTop:"-2px"}}>                
            <div className="url-locations__items-list" style={{maxWidth:"46%",display:"flex",flexWrap:"wrap"}}>
              <a style={{width:"30%",fontSize:"11px",border:"hidden"}} onClick={()=> this.onClickiMG(1)}>
                  <h4>CAMPUS CENTRAL DE GUATEMLA</h4>                    
                  <span>PBX: 2426-2626</span>
                  <br></br>
                  <span>Vista Hermosa III, zona 16 Guatemala, Centroamérica 01016</span>              
                  </a>

                  <a style={{width:"30%",fontSize:"11px",border:"hidden"}} onClick={()=> this.onClickiMG(2)}>
                  <h4>CAMPUS DE QUETZALTENANGO</h4>                    
                  <span>PBX: 7722-9900</span>
                  <br></br>
                  <span>14 avenida 0-43, zona 3</span>              
                  </a>

                  <a style={{width:"30%",fontSize:"11px",border:"hidden"}} onClick={()=> this.onClickiMG(3)}>
                  <h4>CAMPUS DE LA VERAPAZ</h4>                    
                  <span>PBX: 7720-8300</span>
                  <br></br>
                  <span>Km 218.5 III, carretera a San Juan Chamelco, Alta Verapaz</span>              
                  </a>    
                  
                   <a style={{width:"30%",fontSize:"11px",border:"hidden"}} onClick={()=> this.onClickiMG(4)}>                       
                   <br></br>
                  <h4>CAMPUS DE HUEHUETANGO</h4>                    
                  <span>PBX: 7720-8400</span>
                  <br></br>
                  <span>11 avenida 1-10 Corral Chiquito, zona 8 de Guatemala Huehuetango</span>              
                  </a>    

                   <a style={{width:"30%",fontSize:"11px",border:"hidden"}} onClick={()=> this.onClickiMG(5)}>                       
                   <br></br>
                  <h4>CAMPUS DE QUICHÉ</h4>                    
                  <span>PBX: 7963-8500</span>
                  <br></br>
                  <span>Km 166.9, aldea El Carmen Chitatul, Santa Cruz del Quiché, carretera Joyabaj</span>              
                  </a>    

                  <a style={{width:"30%",fontSize:"11px",border:"hidden"}} onClick={()=> this.onClickiMG(6)}>                       
                   <br></br>
                  <h4>CAMPUS DE ZACAPA</h4>                    
                  <span>PBX: 7720-8100</span>
                  <br></br>
                  <span>Km 3, aldea Manzanotes Zacapa</span>              
                  </a>    

                  </div> 
            </div>    
              
            <div className="Columna1" style={{marginLeft:"730px",marginTop:"-210px"}}>              
            <img src= {this.state.image} height="240hv" width="350px"/>      
            <br></br>
            <p>Mapa sedes</p>
            </div>                        

            <div style={{background:"black",width:"100%",margin:"0 auto", paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px !importante",paddingBottom:"20px !importante",display:"flex",flexDirection:"column"}}>
                <a style={{width:"100%"}}>
            <span style={{fontSize:"12px",letterSpacing:"2px",marginRight:"640px"}}>COPYRIGHT 2020. UNIVERSIDAD RAFAEL LANDÍVAR</span>            
            <span style={{fontSize:"12px",letterSpacing:"2px",marginLeft:"-450px"}}>{"SITIO WEB POR"} <a  href="https://github.com/IvanArango98?tab=repositories" color="white !important"> IA </a></span>
            <span style={{fontSize:"12px",letterSpacing:"2px",marginLeft:"450px"}}>AVISO LEGAL</span>
            </a>
            </div>

            </div>
          

            </>
         );
    }
}
 
export default FooterP;