import React, { Component } from 'react';
import loadData from '../utils/loadData';
import Chart from './chart';


class TotalMembers extends Component {
    state = {
        members: []
    }
    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/`
            ); 
            const members = data;
            console.log(members);

        this.setState({
            members
        })
        }

    render() {
        const { members } = this.state;
        return(
            <>
            <div className="dashHome">
            <div className="total--wrapper">
                <h1>Total Members</h1>
                <h1>{members.length}</h1>
            </div>
            <div className='total--wrapper'>
                <h1>Monthly Sales</h1>
                <h1>${members.length * 110}</h1>
            </div>
            <div className='total--wrapper'>
            <h1>Members added this month</h1>
                <h1>{members.length}</h1>
            </div>
            </div>
            <Chart />
            </>
        );
    }
}

export default TotalMembers;