import { useState } from 'react'
import PropTypes from 'prop-types'

const EjercicioComponent = ({ year }) => {

  const [actual, setActual] = useState(year)

  const pasarAnterior = () => {
    setActual(actual - 1)
  }
  const pasarSiguiente = () => {
    setActual(actual + 1)
  }

  const handleChange = e => {
    let dato = parseInt(e.target.value)

    if(Number.isInteger(dato)){
      setActual(dato)
      return
    }
  }

  return (
    <div>
      <h2>Vengo del Component Ejercicios</h2>
      <h3>Ejercicio con Eventos y useState</h3>
      <p>Año actual: {actual}</p>
      <p>
        <button
          onClick={pasarAnterior}
        >ANTERIOR
        </button>

        <button
          onClick={pasarSiguiente}
        >SIGUIENTE
        </button>
      </p>
      <p>
        <input
          type="text"
          placeholder='Ingresa el año'
          onChange={handleChange}
        />
      </p>
    </div>
  )
}

EjercicioComponent.PropTypes = {
  year: PropTypes.number.isRequired
}

export default EjercicioComponent