import React, { Component } from 'react';
import { choice } from '../Functions/Helpers/helpers';
import './WiseSquare.css'

class WiseSquare extends Component {

    static defaultProps = {
        messages: [
            'Alphabet ‘O’ stands for ‘OPPORTUNITY’ which is absent in YESTERDAY, Available Once in T’O’DAY, & Available Thrice in T’O’M’O’RR’O’W. Never lose hope.',
            'A Stone is broken By the last Stroke Of Hammer. This doesn’t mean that the 1st Stroke is useless. Success is the result Of Continuous effort!!!',
            'Every single person on the planet has a story. Don’t judge people before you truly know them. The truth might surprise you.',
            'The word ‘TRUST’ is the base of all relations, but a small mistake made can change its entire meaning. Like just a missing ‘T’ can ‘Rust’ the relation!',
            'Life does not provide Warranties and Guarantees it only provides possibilities and opportunities for those who there to make best use of it!',
            'When GOD solves your problems, You have faith in his abilities…. When he doesn’t solve your problems, He has faith in your abilities…'
        ],
        colors: ['#E64A19', '#FFCCBC', '#009688', '#8BC34A', '#795548', '#212121', '#757575', '#BDBDBD'],
        txtColor: ['#f4f4f4', '#212121'],
        changing: false
    }

    constructor(props) {
        super(props);
        this.state = {
            msg: choice(this.props.messages),
            bgColor: choice(this.props.colors),
            txtColor: this.props.txtColor[0],
            isChanging: this.props.changing
        }
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    dispenseWisdom() {
        let newMessage;
        let newColor;
        do {
            newColor = choice(this.props.colors);
            newMessage = choice(this.props.messages);
        } while (newColor === this.state.bgColor && newMessage === this.state.msg);
        this.setState(st => {
            let myTxtColor;
            const isLightBg = newColor === '#212121' || newColor === '#009688' || newColor === '#795548' || newColor === '#E64A19' || newColor === '#757575' || newColor === '#8BC34A';
            isLightBg ? myTxtColor = '#f4f4f4' :  myTxtColor = '#212121';
            return {
                msg: st.msg = newMessage,
                bgColor: st.bgColor = newColor,
                txtColor: st.txtColor = myTxtColor,
            }
        });
    }

    handleCopy() {
        alert('Copied');
    }

     render() {
         return (
              <div className={`WiseSquare ${this.state.isChanging && 'shaking'}`} style={{backgroundColor: this.state.bgColor, color: this.state.txtColor}}  onMouseEnter={this.dispenseWisdom}>
                  <h1>Hover here for a wise message!</h1>
                  <h3 onCopy={this.handleCopy}> {this.state.msg} </h3>
              </div>
         );
     }
}

export default WiseSquare;