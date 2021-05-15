import React from 'react';
class SimpleFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div style={{background:"black",width:"100%",margin:"0 auto", paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px !importante",paddingBottom:"20px !importante",display:"flex",flexDirection:"column"}}>
            <a style={{width:"100%"}}>
        <span style={{fontSize:"12px",letterSpacing:"2px",marginRight:"640px"}}>COPYRIGHT 2020. UNIVERSIDAD RAFAEL LANDÍVAR</span>            
        <span style={{fontSize:"12px",letterSpacing:"2px",marginLeft:"-450px"}}>{"SITIO WEB POR"} <a  href="https://github.com/IvanArango98?tab=repositories" color="white !important"> IA </a></span>
        <span style={{fontSize:"12px",letterSpacing:"2px",marginLeft:"450px"}}>AVISO LEGAL</span>
        </a>
        </div>
    
         );
    }
}
 
export default SimpleFooter;