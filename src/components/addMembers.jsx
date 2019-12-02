import React, { Component } from 'react';

class AddMember extends Component {
    
    render() {
        return(
            <div className="addForm--wrapper">
            <form className="addForm" method="post">
                <label>
                    Name
                    <input type="text" placeholder="name"></input>
                </label>
                <label>
                    Date Of Birth
                    <input type="date" placeholder="DOB"></input>
                </label>
                <label>
                    Email
                    <input type="email" placeholder="Email"></input>
                </label>
                <label>
                    Phone
                    <input type="tel" placeholder="Phone"></input>
                </label>
                <label>
                    Date Joined
                    <input type="date" placeholder="Joined.."></input>
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
        );
    }
}

export default AddMember;