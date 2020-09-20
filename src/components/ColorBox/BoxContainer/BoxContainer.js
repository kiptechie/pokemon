import React, { Component } from 'react';
import Box from '../Box/Box';
import './BoxContainer.css'

class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 20,
        allColors: ['#E64A19', '#FFCCBC', '#009688', '#8BC34A', '#795548', '#212121', '#757575', '#BDBDBD']
    }

   render() {
    const boxes = Array.from({length: this.props.numBoxes}).map((n, index) => (
        <Box key={index} colors={this.props.allColors} />
    ));
       return (
            <div className='BoxContainer'>
                {boxes}
            </div>
       );
   }
}

export default BoxContainer;