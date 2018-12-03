import React, { Component } from "react";
import "./components/Grocery";
import Grocery from "./components/Grocery";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";
import Spend from "./components/Spend";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">Shoppers Stop</h1>
          </div>
        </div>
        <Spend />
        <div className="row">
          <Grocery />
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
