import React, { Component } from 'react';
import Box from '../Box/Box';
import './BoxContainer.css'

class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 20,
        allColors: ['#E64A19', '#FFCCBC', '#FF5722', '#FFFFFF', '#795548', '#212121', '#757575', '#BDBDBD']
    }

   render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(() => (
        <Box colors={this.props.allColors} />
    ));
       return (
            <div className='BoxContainer'>
                {boxes}
            </div>
       );
   }
}

export default BoxContainer;