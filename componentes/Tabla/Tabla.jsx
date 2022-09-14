import './TablaEstilo.css';
import { useSelector } from 'react-redux';
import React from 'react';

const Tabla = () => {
  const data = useSelector((state) => state.datos.data);
  console.log(data);
  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Telefono</th>
        <th>Genero</th>
      </tr>
      {data.length != 0 &&
        data.map((dat) => (
          <tr>
            <td>{dat.payload.nombre}</td>
            <td>{dat.payload.apellido}</td>
            <td>{dat.payload.email}</td>
            <th>{dat.payload.telefono}</th>
            <th>{dat.payload.genero}</th>
          </tr>
        ))}
    </table>
  );
};

export default Tabla;
