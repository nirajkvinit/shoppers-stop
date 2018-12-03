import React, { Component } from "react";
import { connect } from "react-redux";

import { removeGroceryById } from "../actions";

class ShoppingBag extends Component {
  displayShoppingBag() {
    if (this.props.shoppingBag.length > 0) {
      return (
        <ul className="list-group">
          {this.props.shoppingBag.map(item => (
            <li
              className="list-group-item"
              key={item.id}
              onClick={() => this.props.removeGroceryById(item.id)}
            >
              <strong>{item.name}</strong> -{" "}
              <span className="label label-info">$ {item.cost}</span> -
              <span className="label label-warning">{item.calories} kcal</span>{" "}
              -<span className="label label-primary">{item.weight} mg</span>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Please Add an item to shopping bag.</strong>
          </li>
        </ul>
      );
    }
  }
  render() {
    return (
      <div className="col-md-4 shopping-bag-bg">
        <h2 className="text-center">Shopping Bag</h2>
        {this.displayShoppingBag()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingBag: state.shoppingBag
  };
}

export default connect(
  mapStateToProps,
  { removeGroceryById }
)(ShoppingBag);
