import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";
import Table from './Table';

class UIShellBody extends Component {
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
      </div>
    );
  }
}
export default UIShellBody;
