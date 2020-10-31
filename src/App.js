import React from "react";
import { connect } from "react-redux";
import Home from "./Home";

function App({ dispatch, count }) {
  return (
    <div className="App">
    <Home/>
    

    </div>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
