import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser, addNewItem } from "../reducers/actions/techAction";

import UserTechList from "./TechStuff/UserTechList";

import {
  Button,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";

const initialState = {
  item_name: "",
  price: "",
  description: "",
  img_url: "",
  rented: false
};

const MainPage = ({ addNewItem, getUser }) => {
  const [addItem, setAddItem] = useState(false);
  const [item, setItem] = useState(initialState);
  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    getUser(user_id);
  }, [user_id, getUser]);

  const Editing = () => {
    setAddItem(true);
  };

  const HandleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const HandleSubmit = e => {
    console.log(item);
    addNewItem(user_id, item);
    setAddItem(false);
    getUser(user_id);
  };

  return (
    <div>
      <h1>Welcome to Use My Tech</h1>
      <h3>Below you can add your tech to rent out!</h3>
      {addItem ? (
        <></>
      ) : (
        <Button variant="contained" color="primary" onClick={() => Editing()}>
          Add Item
        </Button>
      )}
      {addItem ? (
        <div>
          <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
            <TextField
              required
              name="item_name"
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              onChange={HandleChange}
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
                name="price"
                labelWidth={30}
                onChange={HandleChange}
              />
            </FormControl>
            <TextField
              name="description"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={HandleChange}
            />
            <TextField
              name="img_url"
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              onChange={HandleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <></>
      )}
      <UserTechList />
      <div></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  };
};

export default connect(mapStateToProps, { getUser, addNewItem })(MainPage);
