import React, { Component } from "react";
import { connect } from "react-redux";
import { addGroceryById } from "../actions";

class Grocery extends Component {
  buyWithinBudget(item) {
    if (this.props.spent < item.cost) {
      return () => alert("Your budget is low");
    } else {
      return () => this.props.addGroceryById(item.id);
    }
  }

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
                onClick={this.buyWithinBudget(item)}
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
  return {
    grocery: state.grocery,
    spent: state.spendCalculator
  };
}

export default connect(
  mapStateToProps,
  { addGroceryById }
)(Grocery);
