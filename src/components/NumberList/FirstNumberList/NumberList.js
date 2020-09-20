import React, { Component } from 'react';
import NumberItem from './NumberItem';
import '../Number.css'


class NumberList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nums: [1,2,3,4,5,6,7,8,9]
        }
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }))
    }

    render() {
        let nums = this.state.nums.map(n => <NumberItem key={n} value={n} remove={this.remove.bind(this, n)} />)
        return (
             <div>
                 <h1 className='NumberList'>First Number List</h1>
                 <ul>
                     {nums}
                 </ul>
             </div>
        );
    }
}

export default NumberList;