import React from 'react';
import Footer from '../footer/footer'
import FooterP from '../footer/FooterP'
import _Footer_ from '../footer/_Footer_'
import NavBarInicio from '../navbar/navbarInicio'
import {Card,Button, Container,Row} from 'react-bootstrap'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faPhoneAlt, faWindowRestore} from '@fortawesome/free-solid-svg-icons'
import Desarrollo from './Desarrollo'
import Transitions from './Transitions'

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            startDate: new Date(), 
            imagen: "https://www.guatemala.com/fotos/201805/Universidad-Rafal-Landivar-885x500.jpg"           
         }
         this.getDate = this.getDate.bind(this);         
    }

    getDate(date)
    {
        this.setState({startDate:date})
        console.log(this.state.startDate)
    }

    Redes(opcion)
    {
        if(opcion === 1)
        {
            window.location.href = "https://www.facebook.com/url.landivar"
        }

        if(opcion === 2)
        {
            window.location.href = "https://www.instagram.com/u_landivar/"
        }

        if(opcion === 3)
        {
            window.location.href = "https://twitter.com/u_landivar"
        }

        if(opcion === 4)
        {
            window.location.href = "https://www.youtube.com/user/urllandivar"
        }
    }

    render() { 
        
        return (   
                 
                    <div className ="General"                                        
                    >
            <div
                style={
                    {
                        backgroundImage: `url(${this.state.imagen})`,                        
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",                
                        backgroundSize: "cover"                   
                    }
                }
                >   

                <div className="ContenerInicio0">                
                <FontAwesomeIcon icon={faUniversity}/>                
                
                    <div  className="url-nav__phone-container">
                    <a className="NumeroTelefonico" href="50224262626">
                        <FontAwesomeIcon icon={faPhoneAlt}/>                        
                        <span>(502) 2426 2626</span>
                    </a>                                    
                    

                    <div className="Iconos">                                            
                    <a className="IconosRedes">                        
                    <i class="fa fa-facebook-square" aria-hidden="true" onClick={()=>this.Redes(1)}/>                     
                    </a>

                    <a className="IconosRedes">    
                    <i class="fa fa-instagram" aria-hidden="true" onClick={()=>this.Redes(2)}/> 
                    </a>

                    <a className="IconosRedes">    
                    <i class="fa fa-twitter-square" aria-hidden="true" onClick={()=>this.Redes(3)}/> 
                    </a>

                    <a className="IconosRedes">    
                    <i class="fa fa-youtube-play" aria-hidden="true" onClick={()=>this.Redes(4)}/>                              
                </a>                                         
                    </div>  

                    </div>              
                    
                                                    
                </div>                              
                <NavBarInicio/>               
                <div className="ContenedorInicio">
                <hr className="PrincipalText"></hr>
                <h1>Exámenes de Admisión Campus Central</h1>                
                <h2>Ciudad de Guatemala</h2>
                <h3>7, 8, 14, 15, 21, 22, 28 y 29 de mayo</h3>
                <br></br>                
                <h5>- Licenciaturas: Q 300</h5>
                <h5>- Técnicos y diplomados: Q 150</h5>                                
                </div>  

                </div>     

                <Transitions/>
                <Desarrollo/>
                               
                 <FooterP/>              
            </div>        
        
            
        );
    }
}
 
export default Inicio;