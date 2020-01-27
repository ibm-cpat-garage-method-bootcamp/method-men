import React, { Component } from "react";
import Header from "../pattern-components/Header";
// import "../pattern-components/patterns.scss";
import "./components.css";
import axios from "axios";


class Table extends Component {
  constructor(props) {
    super(props);
  }

  renderTableHeader() {
    let header = Object.keys(this.props.data[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  renderTableData() {
    return this.props.data.map((item, index) => {
       const { itemName, needed, aisle } = item //destructuring
       return (
          <tr key={itemName}>
             <td onClick={this.props.toggleNeeded}>{itemName}</td>
             <td>{needed}</td>
             <td>{aisle}</td>
          </tr>
       )
    })
 }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Fresh Grocers Personalized List" subtitle="List of regularly used items" />
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
