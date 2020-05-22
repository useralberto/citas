
import React, {Fragment, useState} from 'react';

const Formulario = () => {

  //Crar state de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  });

  const [error, actualizarError] = useState(false);

  //funcion que se ejecuta cada que el usario escribe en un input
  const actualizarstate = event =>{
    actualizarCita({
      ...cita,
      [event.target.name]: event.target.value
    });
  }

  //Extraer los valores
  const {mascota, propietario, fecha, hora, sintomas} = cita;


  //Cuando el usuario preciona enviar cita.
  const submitCita = event =>{
    event.preventDefault();

    //Validar 
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
      actualizarError(true);
      return
    }else{
      actualizarError(false);
    }

    //Asignar un ID

    // Crear la cita

    //Reinicar el form
  }  

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {
        error ?
        <h1 className="alerta-error">Todos los campos son obligatorios</h1>
        :null
      }


      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input 
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarstate}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={actualizarstate}
          value={propietario}
        />
        <label>Fecha</label>
        <input 
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarstate}
          value={fecha}
        />
        <label>Nombre Dueño</label>
        <input 
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarstate}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarstate}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button> 
      </form>
    </Fragment>
  );
}
 
export default Formulario;