import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";
import Table from './Table';
import ViewButton from './ViewButton';
import axios from 'axios';

class UIShellBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {"name": "salami", "needed": "Yes", "aisle": "deli" },
        {"name": "goat cheese", "needed": "No", "aisle": "dairy" },
        {"name": "broccoli", "needed": "Yes", "aisle": "produce" }
      ],
      view: 'masterList'
    }

    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleViewUpdate = this.handleViewUpdate.bind(this);
    this.toggleNeeded = this.toggleNeeded.bind(this);
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
         let neededData = [];
         for (let i = 0; i < data.length; i++) {
           if (data[i].needed === 'Yes') {
             neededData.push(data[i]);
           }
         }
         neededData = neededData.sort((a, b) => b.aisle < a.aisle);
         this.setState({
           data,
           neededData,
         })
     })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/dataUpdate', {
      itemName: this.state.itemName,
      aisle: this.state.aisle
    })
     .then((response) => {
       this.requestData();
       console.log(response);
     })
    console.log('eyyyyyo');
  } 

  componentDidMount() {
    this.requestData();
  }

  handleViewUpdate(event) {
    event.preventDefault();
    this.setState({
      view: event.target.name
    })
  }

  toggleNeeded(event) {
    console.log(event.target.innerText);
    axios.post('/api/toggleUpdate', {
      itemName: event.target.innerText
    })
     .then((response) => {
       this.requestData();
       console.log(response);
     })
  }


  components = {
    "Simple List": SimpleList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  render() {
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    let renderedData;
    if (this.state.view === 'masterList') {
      renderedData = this.state.data;
    } else if (this.state.view === 'groceryList') {
      renderedData = this.state.neededData;
    }
    return (
      <div className="pattern-container">
        <Table data={renderedData} showDescription={true} toggleNeeded={this.toggleNeeded}/>
        <PatternName showDescription={true} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <ViewButton handleViewUpdate={this.handleViewUpdate}/>
      </div>
    );  
  }
}
export default UIShellBody;
