import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {useParams} from 'react-router-dom';
import {getUser} from '../../reducers/actions/techAction';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import history from '../../utils/history';

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

const ColorButton = withStyles(theme => ({
  root: {
    width: "30%",
    color: "white"
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: "1rem auto .2rem auto"
  }
}));

const UpdateItem = props => {
  const classes = useStyles();
  const {id, user_id} = useParams();
  const [updateItem, setUpdateItem] = useState(initialState);


  useEffect(() => {
    const itemToUpdate = props.userStuff.find(
      thing => `${thing.id}` === id
    );
    console.log('item to update', itemToUpdate)
    if (itemToUpdate) {
      setUpdateItem(itemToUpdate);
    }
  }, [props.userStuff, id]);

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

  const HandleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/users/${user_id}/stuffs/${id}`, updateItem)
      .then(res => {
        console.log('update res:',res);
        props.setIsEditing(false)
        props.getUser(user_id)
        history.push(`/user-page/${user_id}`);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  console.log(updateItem)

  return (
    <div className="form-container">
      <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
        <TextField
          required
          name="item_name"
          id="outlined-basic"
          label="Item Name"
          variant="outlined"
          value={updateItem.item_name}
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
            labelWidth={50}
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
        <ColorButton
          className={classes.margin}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </ColorButton>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userStuff: state.userStuff
  };
};

export default connect(mapStateToProps,{getUser})(UpdateItem);
