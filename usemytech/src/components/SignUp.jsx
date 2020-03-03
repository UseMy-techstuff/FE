import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { object, string } from 'yup';

const SignUp = () => {
  const schema = object().shape({
    username: string().required('Username is required'),
    password: string().required('Password is required'),
  });
  const { register, handleSubmit, errors, control } = useForm({ validationSchema: schema });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        Submit
      </Button>
    </form>
  );
};
export default SignUp;