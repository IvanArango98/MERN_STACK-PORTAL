import React from 'react';
class SimpleFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div                          
            >
            <footer           
            style={{
                textAlign: "center",
                padding:"3px",
                backgroundColor:"DarkSalmon",
                color:"white"
            }}           
            >
            <p>Author: Hege Refsnes
            <a href="mailto:hege@example.com">hege@example.com</a></p>
            </footer>
            </div>

         );
    }
}
 
export default SimpleFooter;