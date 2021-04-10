import React from 'react';
import './loader.css'
import {PacmanLoader} from 'react-spinners'

export default class Loading extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            show: false

         }
    }

    componentWillReceiveProps(nextProps)
    {      
        if( nextProps.show !== this.state.show )
        {
            this.setState({show: nextProps.show})
        }   
        
    }

    render() { 
        return (
            <>
           {
               this.state.show ?
           
            <div id="loading-backdrop">
               <PacmanLoader
            className = "UserItem-PacMan"
            color="#FFF"
            loading={true}
            />
            </div> : null
            }
            </>           

        );
    }
}