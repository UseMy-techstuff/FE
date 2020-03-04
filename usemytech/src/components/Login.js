import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginData } from "../reducers/actions/techAction";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import styled from "styled-components";
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

  const onSubmit = () => {
    
    props.loginData(credential);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <h1>Login</h1>
          <UserName>
            <TextField
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
            <Button color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </Btn>
          <Link to="/signup">Sign Up</Link>
        </Box>
      </form>
    </Container>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { loginData })(Login);
