import React, {Fragment} from 'react';
import Formulario from './componentes/Formulario' 


function App() {
  return (
    <Fragment>
      <h1>Administrador de contenido</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            < Formulario />
          </div>
          <div className="one-half column">
            1
          </div>
        </div>
      </div>
    </Fragment>   
  );
}

export default App;
