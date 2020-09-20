import React, { Component } from 'react';
import '../Number.css'


class NumberItem extends Component {

    render() {
        return (
             <li className='NumberList'>
                  {this.props.value}
                 <button onClick={this.props.remove}>X</button>
             </li>
        );
    }
}

export default NumberItem;