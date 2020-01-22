import React, { Component } from "react";
import Header from "../pattern-components/Header";
// import "../pattern-components/patterns.scss";
import "./components.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
            {"name": "salami","picture": "picture1", "amount": 4, "aisle": "deli" },
            {"name": "goat cheese", "picture": "picture2", "amount": 3, "aisle": "dairy" },
            {"name": "broccoli","picture": "picture1", "amount": 4, "aisle": "produce" }
        ]
    }
  }

  renderTableData() {
    return this.state.data.map((item, index) => {
       const { name, picture, amount, aisle } = item //destructuring
       return (
          <tr key={name}>
             <td>{name}</td>
             <td>{picture}</td>
             <td>{amount}</td>
             <td>{aisle}</td>
          </tr>
       )
    })
 }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Table" subtitle="A basic boilerplate page." />
        <table id='items'>
            <tbody>
                {this.renderTableData()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
