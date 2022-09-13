import * as React from 'react';
import './style.css';
// Components
import Formulario from './componentes/Formulario/Formulario';
// Redux
import store from './state/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Formulario />
    </Provider>
  );
}
