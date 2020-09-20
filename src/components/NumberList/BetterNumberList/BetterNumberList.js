import React, { Component } from 'react';
import BetterNumberItem from './BetterNumberItem';
import '../Number.css'


class BetterNumberList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nums: [1,2,3,4,5,6,7,8,9]
        }
        this.remove = this.remove.bind(this);
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }))
    }

    render() {
        let nums = this.state.nums.map(n => <BetterNumberItem key={n} value={n} remove={this.remove} />)
        return (
             <div>
                 <h1 className='NumberList'>Better Number List</h1>
                 <ul>
                     {nums}
                 </ul>
             </div>
        );
    }
}

export default BetterNumberList;