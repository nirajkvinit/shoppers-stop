import React, { Component } from "react";
import { connect } from "react-redux";

class Stats extends Component {
  render() {
    let cost = 0;
    let calories = 0;
    let weight = 0;
    this.props.shoppingBag.forEach(item => {
      cost += item.cost;
      calories += item.calories;
      weight += item.weight;
    });
    return (
      <div className="col-md-3 stats-bg">
        <h2 className="text-center">Stats</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost $ {cost}</li>
          <li className="list-group-item">Calories {calories} kcal</li>
          <li className="list-group-item">Weight {weight} gm</li>
        </ul>
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
  null
)(Stats);
