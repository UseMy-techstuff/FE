import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginData } from "../reducers/actions/techAction";

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const initialState = {
  username: "",
  password: ""
};

const Login = props => {
  const [credential, setCredential] = useState(initialState);

  const schema = object().shape({
    username: string().required("Username is required"),
    password: string().required("Password is required")
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const HandleChange = e => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value
    });
  };

  console.log(credential);

  const onSubmit = () => {
    console.log(credential);
    props.loginData(credential);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button color="primary" type="submit" variant="contained">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { loginData })(Login);
