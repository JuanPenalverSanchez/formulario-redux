import React from 'react';
import { useForm } from 'react-hook-form';
// Estilos
import './FormularioEstilo.css';
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
          color="primary"
          {...register('First name', { required: true, maxLength: 80 })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          color="secondary"
          {...register('Last name', { required: true, maxLength: 100 })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          color="secondary"
          {...register('Email', { required: true, maxLength: 100 })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Mobile number"
          variant="standard"
          color="secondary"
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <br />
        <br />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Title}
            label="Title"
            color="secondary"
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
        <button data-text="Awesome" class="button" type="submmit">
          <span class="actual-text">&nbsp;ENVIAR&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;ENVIAR&nbsp;
          </span>
        </button>
      </form>
    </FormGroup>
  );
}
