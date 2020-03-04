import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import UpdateItem from "./UpdateItem";

import { Paper, Button } from "@material-ui/core";

const initialData = {
  item_name: "",
  price: "",
  description: "",
  img_url: "",
  rented: false
};

const EditItem = () => {
  const user_id = window.localStorage.getItem("user_id");
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState(initialData);

  useEffect(() => {
    console.log("params", id);
    axiosWithAuth()
      .get(`/users/${user_id}/stuffs/${id}`)
      .then(res => {
        console.log(res);
        setItem(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  });

  const HandleDelete = item_id => {
    axiosWithAuth()
      .delete(`/users/${user_id}/stuffs/${item_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {});

  return (
    <div>
      <Paper elevation={3}>
        <h1>{item.item_name}</h1>
        <img src={item.img_url} alt={item.item_name} />
        <h3>Price: ${item.price}</h3>
        <div>
          <p>{item.description}</p>
        </div>
        {isEditing && (
          <UpdateItem setIsEditing={setIsEditing} item_id={item.item_id} />
        )}
        <Button size="small" color="primary" onClick={() => setIsEditing(true)}>
          Update
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => HandleDelete(item.item_id)}
        >
          Delete
        </Button>
      </Paper>
    </div>
  );
};

export default EditItem;
