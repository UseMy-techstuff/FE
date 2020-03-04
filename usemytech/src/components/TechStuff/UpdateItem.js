import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  Button,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialState = {
  item_name: "",
  price: "",
  description: "",
  img_url: "",
  rented: false
};

const UpdateItem = props => {
  const [updateItem, setUpdateItem] = useState(initialState);

  useEffect(() => {
    const itemToUpdate = props.userStuff.find(
      thing => `${thing.id}` === props.id
    );
    if (itemToUpdate) {
      setUpdateItem(itemToUpdate);
    }
  }, []);

  const HandleChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "price") {
      value = parseInt(value, 10);
    }
    setUpdateItem({
      ...updateItem,
      [e.target.name]: value
    });
  };

  const HandleSubmit = (user_id, item_id) => {
    axiosWithAuth()
      .put(`/users/${user_id}/stuffs/${item_id}`, updateItem)
      .then(res => {
        console.log(res);
        props.setIsEditing(false)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
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
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
  );
};

const mapStateToProps = state => {
  return {
    userStuff: state.userStuff
  };
};

export default connect(mapStateToProps,{})(UpdateItem);
