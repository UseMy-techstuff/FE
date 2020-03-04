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
  const user_id = window.localStorage.getItem('user_id')
  const [updateItem, setUpdateItem] = useState(initialState);


  useEffect(() => {
    const itemToUpdate = props.userStuff.find(
      thing => `${thing.id}` === props.item_id
    );
    console.log('item to update', itemToUpdate)
    if (itemToUpdate) {
      setUpdateItem(itemToUpdate);
    }
  }, [props.userStuff, props.item_id]);

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

  const HandleSubmit = (item_id) => {
    axiosWithAuth()
      .put(`/users/${user_id}/stuffs/${item_id}`, updateItem)
      .then(res => {
        console.log(res);
        props.setIsEditing(false)
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={() => HandleSubmit(updateItem.id)}>
        <TextField
          required
          name="item_name"
          id="outlined-basic"
          label="Item Name"
          variant="outlined"
          value={updateItem.name}
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
            value={updateItem.price}
            onChange={HandleChange}
          />
        </FormControl>
        <TextField
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={updateItem.description}
          onChange={HandleChange}
        />
        <TextField
          name="img_url"
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          value={updateItem.img_url}
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
