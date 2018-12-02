import React, { Component } from "react";
import "./components/Grocery";
import Grocery from "./components/Grocery";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";

class App extends Component {
  render() {
    return (
      <div>
        <Grocery />
        <ShoppingBag />
        <Stats />
      </div>
    );
  }
}

export default App;
