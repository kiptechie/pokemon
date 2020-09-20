import React, { Component } from 'react';
import '../Number.css'

class BetterNumberItem extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);        
    }

    handleRemove(ev) {
        this.props.remove(this.props.value);
    }

    render() {
        return (
             <li className='NumberList'>
                 {this.props.value}
                 <button onClick={this.handleRemove} > X </button>
             </li>
        );
    }
}

export default BetterNumberItem;