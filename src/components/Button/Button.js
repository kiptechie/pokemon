import React, { Component } from 'react';
import '../../App.css'
import './Button.css'

class Button extends Component {
    render() {
        return (
            <div className="text-center" >
            <button className="Button" onClick={function() {
                 alert('Clicked!!');
             }}>
                 Show Alert!!
             </button>
            </div>
        );
    }
}

export default Button;