import React, { Component } from "react";
import Header from "./Header";
import "./patterns.scss";

class BasicPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {name: ''}
  }
  
  handleChange = event => {
    
 const username = this.username.value;
 const amount = this.amount.value;
 const aisle = this.aisle.value;

 const info = {username: username, amount: amount, aisle: aisle};
 const data = [...this.state.data, info];
 data.push(info);
    
    
    this.setState({ data: data});
  };

  
  handleSubmit = event => {
    event.preventDefault();
    alert('Your username is: ' + this.input.value);
  };
  
  

  
  

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Basic Page" />
        
      
        <form onSubmit = {this.handleChange}>
         <label htmlFor="username">username</label>
         <input
           type="text"
           name="username"
           //value={this.state.username}
           onChange={this.handleChange}
           ref={(input) => this.username = input}
         />
<label htmlFor="amount">amount</label>
<input
           type="text"
           name="amount"
           value={this.state.amount}
           onChange={this.handleChange}
           ref={(input) => this.amount = input}
         />
         
<label htmlFor="aisle">aisle</label>
<input
           type="text"
           name="aisle"
           value={this.state.aisle}
           onChange={this.handleChange}
           ref={(input) => this.aisle = input}
         />
       </form>
      
       <button 
     type="submit" 
     className="btn btn-primary">Save
 </button>
      
      
      
      
      </div>
    


    );
  }
}
  
  


export default BasicPage;
