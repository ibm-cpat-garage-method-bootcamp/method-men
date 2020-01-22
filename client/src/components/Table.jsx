import React, { Component } from "react";
import Header from "../pattern-components/Header";
// import "../pattern-components/patterns.scss";
import "./components.css";
import axios from "axios";


class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
            {"name": "salami", "needed": "Yes", "aisle": "deli" },
            {"name": "goat cheese", "needed": "No", "aisle": "dairy" },
            {"name": "broccoli", "needed": "Yes", "aisle": "produce" }
        ]
    }
  }

  renderTableHeader() {
    let header = Object.keys(this.state.data[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  renderTableData() {
    return this.state.data.map((item, index) => {
       const { name, needed, aisle } = item //destructuring
       return (
          <tr key={name}>
             <td>{name}</td>
             <td>{needed}</td>
             <td>{aisle}</td>
          </tr>
       )
    })
 }

 componentDidMount() {
   axios.get('/api/test')
    .then((response) => console.log(response));
 }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Table" subtitle="A basic boilerplate page." />
        <table id='items'>
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
