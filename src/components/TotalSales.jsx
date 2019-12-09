import React, { Component } from 'react';
import loadData from '../utils/loadData';

class TotalSales extends Component {
    state = {
        sales: []
    }

    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/members/sales/`
        )
        const sales = data;

        this.setState({
            sales
        })
    } 

    render() { 
        const { sales } = this.state;
        return (
             <div>
                {sales.map(s => 
                <ul key={s.id}>
                    <li>{s.item}: {s.cost}
                    </li>
                </ul>
                    )}
            </div>
                );
    }
}
 
export default TotalSales;