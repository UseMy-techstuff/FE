import React, { useState, useRef } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';

const Login = () => {
  const schema = object().shape({
    Fname: string().required('First name is required'),
    Lname: string().required('Last name is required'),
    email: string().required('Email is required'),
    password: string().required('Password is required'),
  });
  const { register, handleSubmit, errors, control, watch } = useForm({ validationSchema: schema });
  const onSubmit = (data) => {
    console.log(data);
  };

  const password = useRef({});
  password.current = watch("password", "");
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="Fname"
        error={!!errors.Fname}
        label="First Name"
        helperText={errors.Fname ? errors.Fname.message : ''}
        type="text"
        inputRef={register}
        />
    <TextField
        name="Lname"
        error={!!errors.Lname}
        label="Last Name"
        inputRef={register}
        helperText={errors.Lname ? errors.Lname.message : ''}
        type="text"
    />
    <TextField
        name="email"
        error={!!errors.email}
        label="Email"
        helperText={errors.email ? errors.email.message : ''}
        type="email"
        inputRef={register}
    />
    <TextField
        name="password"
        error={!!errors.password} 
        label="Password"
        inputRef={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
        helperText={errors.password ? errors.password.message : ''}
        type="password"
    />
    <TextField
        name="ConfirmPassword"
        error={!!errors.password}
        label="Confirm Password"
        inputRef={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        helperText={errors.password ? errors.password.message : ''}
        type="password"
    />
      <Button
        color="primary"
        type="submit"
        variant="contained"
      >
        Sign up
      </Button>
      <Link  to="/Login">Sign In</Link>
    </form>
  );
};
export default Login;