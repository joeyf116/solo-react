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

        removeMember = async data => {
            const response = await fetch("http://localhost:3333/", {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            });
            const reply = await response;
            if (reply.status === 200) {
              alert("Member Removed!");
            }
            if (reply.status !== 200) {
              alert("Member not Removed");
            }
          };

          handleSubmit = e => {
            const { members } = this.state
            e.preventDefault();
            console.log(members[0].id)
            this.removeMember(members[0].id);
          };

    render() {
        const { members } = this.state;
        return(
          <>
            
            <div className="dashMembers">
            <h1>Members</h1>
            <table className="table--wrapper" border="1|0">
              <tr className="table--header">
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Phone
                </th>
                <th>
                  Remove
                </th>
              </tr>
                {members.map(m => 
                <tr key={m.id} value={m.id} name={m.id} className="table--items">
                  <td>{m.name}</td> 
                  <td>{m.email}</td>  
                  <td>{m.phone}</td>
                  <td><button onClick={this.handleSubmit} className='removeButton'>Remove member</button></td>
                  </tr>)}
            </table>
            </div>
            </>
        );
    }
}

export default Members;