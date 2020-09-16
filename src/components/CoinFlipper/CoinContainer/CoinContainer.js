import React, { Component } from 'react';
import { choice } from '../../Functions/Helpers/helpers';
import Coin from '../Coin/Coin';

class CoinContainer extends Component {

    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    }

    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.flipCoin();
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" && 1),
                nTails: st.nTails + (newCoin.side === "tails" && 1)
            };
        })
    }

    render() {
        return (
             <div className="CoinContainer">
                 <h2>Let's flip a coin!</h2>
                 {this.state.currCoin && <Coin side={this.state.currCoin.side} imgSrc={this.state.currCoin.imgSrc} />}
                 <button onClick={this.handleClick}>Flip me!</button>
                 <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} Heads and {this.state.nTails} Tails. </p>
             </div>
        );
    }
}

export default CoinContainer;