import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../reducers/actions/techAction";

import TechItem from "./TechItem";

const TechList = props => {
  useEffect(() => {
    props.getTech();
  }, []);

  useEffect(() => {
    console.log("update stuff", props.stuff);
  })

  
  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stuff: state.stuff,
    error: state.error
  };
};

export default connect(mapStateToProps, { getTech })(TechList);
