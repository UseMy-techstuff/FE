import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../reducers/actions/techAction";

import TechItem from "./TechItem";

const TechList = props => {
  useEffect(() => {
    props.getTech();
  }, []);

  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.stuff.map(tech => (
            <TechItem key={tech.id} tech={tech} />
          ))}
        </div>
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
