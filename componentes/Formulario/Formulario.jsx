import React from 'react';
import { useForm } from 'react-hook-form';
// Estilos
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Title,
  handleChange,
  MenuItem,
  FormGroup,
} from '@mui/material';

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <FormGroup>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          {...register('First name', { required: true, maxLength: 80 })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          {...register('Last name', { required: true, maxLength: 100 })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          {...register('Email', { required: true, maxLength: 100 })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Mobile number"
          variant="standard"
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Title}
            label="Title"
            onChange={handleChange}
            {...register('Title', { required: true })}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />

        <input type="submit" />
      </form>
    </FormGroup>
  );
}
