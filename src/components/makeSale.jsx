import React, { Component } from 'react';
import loadData from '../utils/loadData';
import white from "../images/inventory/whiteRashguard.jpg";
import TotalSales from './TotalSales';

class makeSale extends Component {
    state = { 
        members: [],
        member_id: 1,
        cost: '$64.99',
        item: "Rashguard"
     }

     async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/`
            ); 
            const members = data;
            // console.log(members);

        this.setState({
            members
        })
        }

     handleClick = (e) => {
        e.preventDefault();
        const data = this.state;
        this.addSale(data)
     }

     handleChange = e => {
         const { value } = e.target;
         console.log(e.target);
         this.setState({
             member_id: value
         });
     };

     addSale = async data => {
        const response = await fetch("http://localhost:3333/members", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        // console.log(data)
        const reply = await response;
        if (reply.status === 200) {
          alert("Sale Made!");
        }
        if (reply.status !== 200) {
          alert("Sale Failed");
        }
      };

    render() { 
        const { members, member_id } = this.state;
        return ( 
            <>
            <div className="dashSale">
            <div className="inventory">
            <h1>Inventory</h1>
                <form>
                <div className="item">
                    <h2>Rashguard</h2>
                    <img src={white} alt="Rashguard"></img>
                    <p>Price: $64.99</p>
                    <select className="selectInventory" onChange={this.handleChange}>
                    {members.map(m => 
                        <option key={m.id} value={m.id} name={member_id}>{m.name}</option>
                    )}
                    </select>
                    <button onClick={this.handleClick}className="purchase">Purchase</button>
                </div>
                </form>
                </div>
                </div>
                <TotalSales />
            </>
         );
    }
}
 
export default makeSale;