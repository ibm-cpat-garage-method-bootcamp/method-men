import React, { Component } from "react";
import Header from "./Header";
import "./patterns.scss";

class BasicPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {itemName: '', amount: '', aisle: ''}

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

  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log(JSON.stringify(this.state));    
    // this.state = {itemName: '', amount: '', aisle: ''}   
  };
  
  

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Basic Page" />
        
      
        <form>
            <label htmlFor="itemName">Item Name</label>
            <input
              onChange = {this.handleChange}
              type="text"
              name="itemName"
            />
            <label htmlFor="amount">amount</label>
            <input
              onChange = {this.handleChange}
               type="text"
                name="amount"
                
            />
         
            <label htmlFor="aisle">aisle</label>
            <input
                type="text"
                name="aisle"
                onChange = {this.handleChange}
            />

        <button onClick = {this.handleSubmit} type="submit" className="bx--row btn btn-primary">Save </button>
       </form>
       
      

      </div>
    


    );
  }
}

export default BasicPage;
