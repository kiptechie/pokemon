import React, { Component } from 'react';
import '../../App.css'

class ScoreKeeper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
        this.addNo = this.addNo.bind(this);
        this.subtractNo = this.subtractNo.bind(this);
        this.clearNo = this.clearNo.bind(this);
        this.addThree = this.addThree.bind(this);
        this.subtractThree = this.subtractThree.bind(this);
        this.minusThree = this.minusThree.bind(this);
    }

    addNo () {
        this.setState({score: this.state.score + 1});
    }

    addThree () {
        this.setState(cs => {
           return {score: cs.score + 3};
        })
    }

    subtractNo () {
        this.setState({score: this.state.score - 1});
    }

    subtractThree() {
        this.setState(this.minusThree);
    }

    clearNo () {
        this.setState({score: 0});
    }

    minusThree(cs) {
        return {score: cs.score - 3};
    }

    render() {
        return (
             <div className="text-center">
                <h1> {this.state.score} </h1>
                <button onClick={this.addNo}>Add </button>
                <button onClick={this.addThree}>Add Three </button>
                <button onClick={this.subtractNo}>Subtract </button>
                <button onClick={this.subtractThree}>Subtract Three </button>
                <button onClick={this.clearNo}>Clear </button>
             </div>
        );
    }
}

export default ScoreKeeper;