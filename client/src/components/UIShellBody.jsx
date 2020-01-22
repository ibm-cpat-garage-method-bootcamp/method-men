import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";
import Table from './Table';

class UIShellBody extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    console.log('hey');
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  };


  components = {
    "Simple List": SimpleList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <Table showDescription={true} />
        <PatternName showDescription={true} handleChange={this.handleChange}/>
      </div>
    );  
  }
}
export default UIShellBody;
