import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

import UpdateItem from './UpdateItem';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function UserItem({tech}) {
  const [isEditing, setIsEditing] = useState(false)
  const {id} = useParams();
  const classes = useStyles();

  const HandleDelete = (user_id,item_id) => {
    axiosWithAuth()
      .delete(`/users/${user_id}/stuffs/${item_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tech.img_url}
          title={tech.item_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tech.item_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tech.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${tech.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isEditing && <UpdateItem setIsEditing={setIsEditing} item_id={tech.id} />}
        <Button size="small" color="primary" onClick={() => setIsEditing(true)}>
          Update
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => HandleDelete(id, tech.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
