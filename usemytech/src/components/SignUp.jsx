import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';

const Login: React.FC = () => {
  const schema = object().shape({
    Fname: string().required('First name is required'),
    Lname: string().required('Last name is required'),
    username: string().required('Username is required'),
    password: string().required('Password is required'),
  });
  const { register, handleSubmit, errors, control } = useForm({ validationSchema: schema });
  const onSubmit = (data: any) => {
    console.log(data);
  };
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
        name="username"
        error={!!errors.username}
        label="Username"
        helperText={errors.username ? errors.username.message : ''}
        type="email"
        inputRef={register}
    />
    <TextField
        name="password"
        error={!!errors.password}
        label="Password"
        inputRef={register}
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