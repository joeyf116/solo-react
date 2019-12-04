import React, { Component } from 'react';
import loadData from '../utils/loadData';
import white from "../images/inventory/whiteRashguard.jpg";

class makeSale extends Component {
    state = { 
        items: [],
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

     handleClick = (e) => {
        e.preventDefault();

     }

    render() { 
        const { members } = this.state;
        return ( 
            <>
            <div className="dashSale">
            <div className="inventory">
            <h1>Inventory</h1>
                <div className="item">
                    <h2>Rashguard</h2>
                    <img src={white}></img>
                    <p>Price: $64.99</p>
                    <select className="selectInventory">
                    {members.map(m => 
                        <option key={m.id}>{m.name}</option>
                    )}
                    </select>
                    <button onClick={this.handleClick}className="purchase">Purchase</button>
                </div>
                <div className="item">
                    <h2>Rashguard</h2>
                    <img src={white}></img>
                    <p>Price: $64.99</p>
                    <select className="selectInventory">
                    {members.map(m => 
                        <option key={m.id}>{m.name}</option>
                    )}
                    </select>
                    <button className="purchase">Purchase</button>
                </div>
                <div className="item">
                    <h2>Rashguard</h2>
                    <img src={white}></img>
                    <p>Price: $64.99</p>
                    <select className="selectInventory">
                    {members.map(m => 
                        <option key={m.id}>{m.name}</option>
                    )}
                    </select>
                    <button className="purchase">Purchase</button>
                </div>
                <div className="item">
                    <h2>Rashguard</h2>
                    <img src={white}></img>
                    <p>Price: $64.99</p>
                    <select className="selectInventory">
                    {members.map(m => 
                        <option key={m.id}>{m.name}</option>
                    )}
                    </select>
                    <button className="purchase">Purchase</button>
                </div>
            </div>
            </div>
            </>
         );
    }
}
 
export default makeSale;