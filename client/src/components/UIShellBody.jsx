import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";
import Table from './Table';
import axios from 'axios';

class UIShellBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {"name": "salami", "needed": "Yes", "aisle": "deli" },
        {"name": "goat cheese", "needed": "No", "aisle": "dairy" },
        {"name": "broccoli", "needed": "Yes", "aisle": "produce" }
      ]
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

  requestData() {
    axios.get('/api/data')
     .then(({ data }) => {
         this.setState({
           data
         })
     })
  }

  componentDidMount() {
    this.requestData();
  }


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
        <Table data={this.state.data} showDescription={true} />
        <PatternName showDescription={true} handleChange={this.handleChange}/>
      </div>
    );  
  }
}
export default UIShellBody;
