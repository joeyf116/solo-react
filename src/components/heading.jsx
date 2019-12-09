import React, { Component } from 'react';
import kuzushi from '../images/icons/Kuzushi.png';

class Heading extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="Heading">
        <ul>
            <li>
                <img src={kuzushi} alt="Kuzushi" />
            </li>
            <li>
                <h1>Heading</h1> 
            </li>
        </ul>
        </div>
        );
    }
}
 
export default Heading;