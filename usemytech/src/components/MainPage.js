import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../reducers/actions/techAction";

const MainPage = props => {
  useEffect(() => {
    props.getUser();
  });

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { getUser })(MainPage);
