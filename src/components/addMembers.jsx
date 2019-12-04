import React, { Component } from 'react';

class AddMember extends Component {
    state = {
        name: '',
        email: '',
        dob: '',
        phone: '',
        datejoined: ''
    }

    addMember = async data => {
        const response = await fetch("http://localhost:3333/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const reply = await response;
        if (reply.status === 200) {
          alert("Member Added!");
        }
        if (reply.status !== 200) {
          alert("Member not added");
        }
      };
    
      handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        console.log(data);
        this.addMember(data);
      };

      handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };

    render() {
        const { name, dob, email, phone, datejoined } = this.state;
        return(
            <div className="dashAddMember">
            <div className="addForm--wrapper">
            <form className="addForm" onSubmit={this.handleSubmit} method="POST">
                <label>
                    Name
                    <input type="text" placeholder="name" value={name} name="name" onChange={this.handleChange}></input>
                </label>
                <label>
                    Date Of Birth
                    <input type="date" placeholder="DOB" value={dob} name="dob" onChange={this.handleChange}></input>
                </label>
                <label>
                    Email
                    <input type="email" placeholder="Email" value={email} name="email" onChange={this.handleChange}></input>
                </label>
                <label>
                    Phone
                    <input type="tel" placeholder="Phone" value={phone} name="phone" onChange={this.handleChange}></input>
                </label>
                <label>
                    Date Joined
                    <input type="date" placeholder="Joined.." value={datejoined} name="datejoined" onChange={this.handleChange}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
            </div>
        );
    }
}

export default AddMember;