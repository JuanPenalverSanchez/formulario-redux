import React from 'react';
import { useForm } from 'react-hook-form';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, saveData } from '../../state/slice';
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
  const data = useSelector((state) => state.datos.data.payload);
  console.log(data);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    dispatch({ type: 'datos/saveData', payload: data });

  return (
    <React.Fragment>
      <FormGroup>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors?.nombre}
            id="standard-basic"
            label="First Name"
            variant="standard"
            color="primary"
            name="nombre"
            helperText={errors?.nombre?.message}
            {...register('nombre', {
              maxLength: { value: 50, message: 'Logitud máxima excedida' },
              required: { value: true, message: 'Este campo es obligatorio' },
            })}
          />
          <br />
          <TextField
            error={errors?.apellido}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            color="secondary"
            name="apellido"
            helper-text={errors?.apellido?.message}
            {...register('apellido', {
              maxLength: { value: 50, message: 'Logitud máxima excedida' },
              required: { value: true, message: 'Este campo es obligatorio' },
            })}
          />
          <br />
          <TextField
            error={errors?.email}
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            color="secondary"
            name="email"
            helperText={errors?.email?.message}
            {...register('email', {
              maxLength: { value: 250, message: 'Logitud máxima excedida' },
              required: { value: true, message: 'Este campo es obligatorio' },
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'El e-mail no es valido',
              },
            })}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Mobile number"
            variant="standard"
            color="secondary"
            name="telefono"
            {...register('telefono', {
              required: false,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <br />
          <br />
          <FormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={Title}
              label="Gender"
              color="secondary"
              onChange={handleChange}
              defaultValue={0}
              name="genero"
              {...register('genero', { required: false })}
            >
              <MenuItem value={'HOMBRE'}>Hombre</MenuItem>
              <MenuItem value={'MUJER'}>Mujer</MenuItem>
              <MenuItem value={'OTRO'}>Otro</MenuItem>
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
    </React.Fragment>
  );
}
