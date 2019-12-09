import React, { Component } from 'react';
import loadData from '../utils/loadData';

class Members extends Component {
    state = {
        members: [],
        status: "active",
        id: 1
};

async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/`
            ); 
            const members = data;

        this.setState({
            members
        })
        }

        updateMember = async data => {
            const response = await fetch("http://localhost:3333/members/update", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            });
            const reply = await response;
            if (reply.status === 200) {
              alert("Member Updated!", reply);
            }
            if (reply.status !== 200) {
              alert("Member Updated");
            }
          };

          handleSubmit = e => {
            const data = this.state;
            e.preventDefault();
            // console.log("handlesubmit: ", data)
            this.updateMember(data);
          };

          handleChange = e => {
            const { value } = e.target;
    
              this.setState({
                status: value
              });
          }

    render() {
        const { members, status, id } = this.state;
        return(
          <>
            
            <div className="dashMembers">
            <h1>Members</h1>
            <form method="put">
            <table className="table--wrapper" border="1|0">
              <thead>
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
                  Status
                </th>
                <th>
                  Remove
                </th>
              </tr>
              </thead>
              
              <tbody>
                {members.map(m => 
                <tr key={m.id} value={m.id} name={m.id} className="table--items">
                  <td>{m.name}</td> 
                  <td>{m.email}</td>
                  <td>{m.phone}</td>  
                  <td>
                    <select onChange={this.handleChange}>
                      <option value="active" name={status}>active</option>
                      <option value="inactive" name={status}>inactive</option>
                      
                      </select></td>
                  <td><button onClick={this.handleSubmit} value={id} className='removeButton'>Update Member</button></td>
                  </tr>
                  )}
                  </tbody>
            </table>
            </form>
            </div>
            </>
        );
    }
}

export default Members;