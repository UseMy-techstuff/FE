import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function TechItem({tech}) {
  const classes = useStyles();

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
        {tech.rented ? (
          <Button variant="contained" disabled>
            Taken
          </Button>
        ) : (
          <Button size="small" color="primary">
            Rent
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
