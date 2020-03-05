import React from "react";
import { connect } from "react-redux";

import UserItems from "./UserItems";

const UserTechList = ({ userStuff }) => {
  
  return (
    <div>
      <h2>My Stuff for Rent</h2>
      {userStuff.map(tech => (
        <UserItems key={tech.id} tech={tech} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userStuff: state.userStuff
  };
};

export default connect(mapStateToProps, {})(UserTechList);
