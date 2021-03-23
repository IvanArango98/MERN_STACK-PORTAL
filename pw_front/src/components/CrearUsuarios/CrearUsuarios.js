import React from 'react';
import {Helmet} from 'react-helmet';
import '../CrearUsuarios/CrearUsuarios.js'


const isBackgroundRed = true;

export default class CrearUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

          }        
    }
    render()
        {             
        return ( 
            <div className="application">
            <Helmet>
                <style>{'body { background-color: #2B2F53; }'}</style>
            </Helmet>
            ...
        </div>
         );
    }
}
 
 