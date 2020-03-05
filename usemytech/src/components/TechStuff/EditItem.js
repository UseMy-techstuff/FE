import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import history from "../../utils/history";

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
  const { id, user_id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState(initialData);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${user_id}/stuffs/${id}`)
      .then(res => {
        console.log(res);
        setItem(res.data[0]);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [id, user_id]);

  const HandleDelete = item_id => {
    axiosWithAuth()
      .delete(`/users/${user_id}/stuffs/${item_id}`)
      .then(res => {
        console.log(res);
        history.push(`/user-page/${user_id}`);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  console.log(item);

  return (
    <div>
      <Paper elevation={3}>
        <h1>{item.item_name}</h1>
        <img src={item.img_url} alt={item.item_name} />
        <h3>Price: ${item.price}</h3>
        <div>
          <p>{item.description}</p>
        </div>
        {isEditing ? (
          <UpdateItem setIsEditing={setIsEditing} item_id={id} />
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => setIsEditing(true)}
          >
            Update
          </Button>
        )}

        <Button size="small" color="primary" onClick={() => HandleDelete(id)}>
          Delete
        </Button>
      </Paper>
    </div>
  );
};

export default EditItem;
