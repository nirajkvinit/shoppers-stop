import React, { Component } from "react";
import { connect } from "react-redux";

class Spend extends Component {
  render() {
    return (
      <div className="row">
        <h2 className="text-center">
          You have{" "}
          <span className="label label-info">$ {this.props.spent}</span> to
          spend.
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingBag: state.shoppingBag,
    spent: state.spendCalculator
  };
}

export default connect(
  mapStateToProps,
  null
)(Spend);
