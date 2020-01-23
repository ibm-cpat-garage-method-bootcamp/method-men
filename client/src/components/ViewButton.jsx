import React, { Component } from "react";

class ViewButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button name="groceryList" onClick={this.props.handleViewUpdate}>Generate Grocery List</button>
                <button name="masterList" onClick={this.props.handleViewUpdate}>View All Items</button>
            </div>
        )
    }
}

export default ViewButton;