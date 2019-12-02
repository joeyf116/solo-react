import React, { Component } from 'react';
import loadData from '../utils/loadData';

class Members extends Component {
    state = {
        members: [],
};

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
            <div>
            <ul>
                {members.map(m => 
                <li key={m.id}>name: {m.name} email: {m.email}  phone: {m.phone}</li>)}
            </ul>
            </div>
        );
    }
}

export default Members;