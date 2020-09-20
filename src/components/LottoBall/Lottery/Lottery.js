import React, { Component } from 'react';
import Ball from '../Ball/Ball';
import './Lottery.css'

class Lottery extends Component {

    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls})}
        this.handleClick = this.handleClick.bind(this);
        this.generate = this.generate.bind(this);
    }

    handleClick () {
        this.generate();
    }

    generate () {
        this.setState(cs => ({
            nums : cs.nums.map(n =>  Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }

    render() {
        return (
            <section className='Lottery'>
                <h1> {this.props.title} </h1>
                <div> 
                   {this.state.nums.map((n, index) => (
                   <Ball key={index} num={n}/>
                   ) )}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;