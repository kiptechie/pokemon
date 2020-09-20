import React, { Component } from 'react';
import './ButtonList.css'

class ButtonList extends Component {

    static defaultProps = {
        colors: ['#E64A19', '#FFCCBC', '#009688', '#8BC34A', '#795548', '#757575', '#BDBDBD']
    }

    constructor(props) {
        super(props);
        this.state = {
            color: 'cyan'
        }
    }

    changeColor(newColor) {
        this.setState({color: newColor});
    }

    render() {
        return (
             <div className='ButtonList' style={{backgroundColor: this.state.color}} >
                 <h1>Pick a background Color</h1>
                 {this.props.colors.map(c => {
                     const colorObj = { backgroundColor: c};
                     return <button key={c} style={colorObj} onClick={this.changeColor.bind(this, c)} ></button>
                 })}
             </div>
        );
    }
}

export default ButtonList;