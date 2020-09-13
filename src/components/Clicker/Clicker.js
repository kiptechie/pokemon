import React, { Component } from 'react';
import '../../App.css'
import './Clicker.css'

class Clicker extends Component {

    state = {
        num: 1
    }

    genRandom = () => {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand});
    }

    render() {
        return (
             <div className='text-center'>
                 <h1>Number is: {this.state.num}</h1>
                 {this.state.num === 7 ? <h2>You Win!!</h2> : <button onClick={this.genRandom}>Random number</button>}
             </div>
        );
    }
}

export default Clicker;