import React, { Component } from 'react';
import '../../App.css'
import './Button.css'

class BrokenClick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({clicked : true});
    }

    render() {
        return (
             <div className="text-center">
                 <h1>{this.state.clicked ? 'Clicked!!' : 'Not Clicked'}</h1>
                 <button onClick={this.handleClick} >Change H1 to clicked</button>
             </div>
        );
    }
}

export default BrokenClick;