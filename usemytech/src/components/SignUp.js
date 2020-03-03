import React, {useState} from "react";
import {connect} from 'react-redux';
import { registerUser } from "../reducers/actions/techAction";

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const initialState = {
  username: "",
  password: ""
};

const SignUp = (props) => {
  const [newUser, setNewUser] = useState(initialState);

  const schema = object().shape({
    first_name: string().required("First name is required"),
    last_name: string().required("Last name is required"),
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
    props.registerUser(newUser)
  };
  
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="first_name"
          error={!!errors.first_name}
          label="First Name"
          helperText={errors.first_name ? errors.first_name.message : ""}
          type="text"
          inputRef={register}
          onChange={HandleChange}
        />
        <TextField
          name="last_name"
          error={!!errors.last_name}
          label="Last Name"
          helperText={errors.last_name ? errors.last_name.message : ""}
          type="text"
          inputRef={register}
          onChange={HandleChange}
        />
        <TextField
          name="username"
          error={!!errors.username}
          label="Username"
          helperText={errors.username ? errors.username.message : ""}
          type="email"
          inputRef={register}
          onChange={HandleChange}
        />
        <TextField
          name="password"
          error={!!errors.password}
          label="Password"
          inputRef={register}
          helperText={errors.password ? errors.password.message : ""}
          type="password"
          onChange={HandleChange}
        />
        <Button color="primary" type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {registerUser})(SignUp);
