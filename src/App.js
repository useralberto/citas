import React, {Fragment, useState} from 'react';
import Formulario from './componentes/Formulario'; 
import Cita from './componentes/Cita'; 


function App() {

  //Arreglo de citas
  const[citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agrege la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Funcion que elimina una cia por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter( cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };
  
  //Mensaje condicional
  const titulo = citas.length > 0 ? 'Administra tus citas' : 'No hay citas.'

  return (
    <Fragment>
      <h1>Administrador de contenido</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            { citas.map( cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>   
  );
}

export default App;
