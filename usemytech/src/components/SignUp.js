import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../reducers/actions/techAction";
import { Button, TextField } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import styled from "styled-components";

const ColorButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#1A2639",
    "&:hover": {
      backgroundColor: "#1A2639"
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-top: 25%;
  margin-bottom: 25%;
  border: 2px solid #3f51b5;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #aaaaaa;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
`;
const UserName = styled.div`
  margin: 2%;
  padding: 2%;
`;
const Password = styled.div`
  margin: 2%;
  padding: 2%;
`;
const Btn = styled.div`
  margin: 2%;
  padding: 2%;
`;
const initialState = {
  first_name: "",
  last_name: "",
  username: "",
  password: ""
};
const SignUp = props => {
  const classes = useStyles();

  const [newUser, setNewUser] = useState(initialState);
  const schema = object().shape({
    first_name: string().required("First Name is required"),
    last_name: string().required("Last Name is required"),
    username: string().required("Username is required"),
    password: string().required("Password is required")
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const HandleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = () => {
    console.log(newUser);
    props.registerUser(newUser);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <h1>Sign Up</h1>
          <UserName>
            <TextField
              required
              name="first_name"
              error={!!errors.first_name}
              label="First Name"
              helperText={errors.first_name ? errors.first_name.message : ""}
              type="text"
              inputRef={register}
              onChange={HandleChange}
            />
          </UserName>
          <UserName>
            <TextField
              required
              name="last_name"
              error={!!errors.last_name}
              label="Last Name"
              helperText={errors.last_name ? errors.last_name.message : ""}
              type="text"
              inputRef={register}
              onChange={HandleChange}
            />
          </UserName>
          <UserName>
            <TextField
              required
              name="username"
              error={!!errors.username}
              label="Username"
              helperText={errors.username ? errors.username.message : ""}
              type="email"
              inputRef={register}
              onChange={HandleChange}
            />
          </UserName>
          <Password>
            <TextField
              required
              name="password"
              error={!!errors.password}
              label="Password"
              inputRef={register}
              helperText={errors.password ? errors.password.message : ""}
              type="password"
              onChange={HandleChange}
            />
          </Password>
          <Btn>
            <ColorButton
              type="submit"
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Submit
            </ColorButton>
          </Btn>
          <Link className='signup' to="/">Log In</Link>
        </Box>
      </form>
    </Container>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { registerUser })(SignUp);
