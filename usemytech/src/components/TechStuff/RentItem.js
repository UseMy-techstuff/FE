import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { rent } from "../../reducers/actions/techAction";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { Paper, Button, Checkbox } from "@material-ui/core";

const initialData = {
  item_name: "",
  price: "",
  description: "",
  img_url: "",
  rented: false
};

const RentItem = ({rent}) => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [item, setItem] = useState(initialData);

  useEffect(() => {
    axiosWithAuth()
      .get(`stuffs/${id}`)
      .then(res => {
        console.log(res);
        setItem(res.data[0]);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [id]);
  
  const HandleChange = e => {
    e.persist();
    console.log('checked',e.target.name);
    setChecked(e.target.checked);
    let value = e.target.checked;
    if (e.target.name === "rent") {
      value = parseInt(value, 10);
    }
    setItem({
      ...item,
      [e.target.name]: value
    });
  };

  console.log(item);

  const HandleRent = (user_id, id, item) => {
    rent(user_id, id, item);
  };

  return (
    <div>
      <Paper elevation={3}>
        <h1>{item.item_name}</h1>
        <img src={item.img_url} alt={item.item_name} />
        <h3>Price: ${item.price}</h3>
        <div>
          <p>{item.description}</p>
        </div>
        <Checkbox
          name="rented"
          checked={checked}
          onChange={HandleChange}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Button
          size="small"
          color="primary"
          onClick={() => HandleRent(item.user_id, item.id, item)}
        >
          Rent
        </Button>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { rent })(RentItem);
