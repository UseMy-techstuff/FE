import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser } from "../reducers/actions/techAction";
import { useParams } from "react-router-dom";

import {
  Button,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";

const MainPage = ({ getUser, userStuff, user }) => {
  const [addItem, setAddItem] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  const Editing = () => {
    setAddItem(false);
  };

  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <h1>{user.first_name}'s Page</h1>
      <Button variant="contained" color="primary" onClick={() => Editing()}>
        Add Item
      </Button>
      {addItem ? (
        <></>
      ) : (
        <div>
          <form noValidate autoComplete="off">
            <TextField
              required
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel required htmlFor="outlined-adornment-amount">
                Price
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
            />
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    userStuff: state.userStuff
  };
};

export default connect(mapStateToProps, { getUser })(MainPage);
