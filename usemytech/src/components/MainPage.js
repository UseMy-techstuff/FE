import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUser } from "../reducers/actions/techAction";
import { useParams } from "react-router-dom";

const MainPage = ({getUser, userStuff}) => {
  const {id} = useParams();


  useEffect(() => {
   getUser(id)
  }, [id, getUser]);

  useEffect(() => {
    console.log(userStuff);
  })

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userStuff: state.userStuff
  };
};

export default connect(mapStateToProps, { getUser })(MainPage);
