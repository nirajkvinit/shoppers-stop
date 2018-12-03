import React, { Component } from "react";
import { connect } from "react-redux";
import { addGroceryById } from "../actions";

class Grocery extends Component {
  render() {
    return (
      <div className="col-md-4 grocery-bg">
        <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
          {this.props.grocery.map(item => {
            return (
              <li
                className="list-group-item"
                key={item.id}
                onClick={() => this.props.addGroceryById(item.id)}
              >
                <strong>{item.name}</strong> -{" "}
                <span className="label label-info">$ {item.cost}</span> -
                <span className="label label-warning">
                  {item.calories} kcal
                </span>{" "}
                - <span className="label label-primary">{item.weight} mg</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log(state);
  return {
    grocery: state.grocery,
    spent: state.spendCalculator
  };
}

export default connect(
  mapStateToProps,
  { addGroceryById }
)(Grocery);
