// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../../App.css'
import './Die.css'

class Die extends Component {
    render() {
        return (
             <div>
                 <i className={`Die ${this.props.rolling && 'shaking'} fas fa-dice-${this.props.face}`} />
                 {/* <p className='Die'>{this.props.face}</p> */}
                 {/* <FontAwesomeIcon icon={["fas", `fa-dice-${this.props.face}`]} /> */}
             </div>
        );
    }
}

export default Die;