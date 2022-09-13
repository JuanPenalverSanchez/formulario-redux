import './TablaEstilo.css';
import { useSelector } from 'react-redux';
import React from 'react';

const Tabla = () => {
  const data = useSelector((state) => state.datos.data.payload);
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
      {data && (
        <tr>
          <td>{data.nombre}</td>
          <td>{data.apellido}</td>
          <td>{data.email}</td>
          <th>{data.telefono}</th>
          <th>{data.genero}</th>
        </tr>
      )}
    </table>
  );
};

export default Tabla;
