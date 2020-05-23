import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './componentes/Formulario'; 
import Cita from './componentes/Cita'; 


function App() {

  //Citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) citasIniciales = []; 

  //Arreglo de citas
  const[citas, guardarCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia.
  useEffect(()=>{

    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas]); // EL [] => es un Array de Dependencias.


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
