import React, { Component } from "react";

class Grocery extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
          <li className="list-group-item">Lorem, ipsum dolor.</li>
          <li className="list-group-item">Lorem, ipsum.</li>
          <li className="list-group-item">Lorem ipsum dolor sit amet.</li>
          <li className="list-group-item">Lorem, ipsum dolor.</li>
        </ul>
      </div>
    );
  }
}

export default Grocery;
