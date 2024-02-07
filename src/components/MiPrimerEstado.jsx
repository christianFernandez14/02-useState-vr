import { useState } from "react"

const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState('Christian Fernández')


  const cambiarNombre = e => {
    setNombre(e.target.value)
  }

  return (
    <div>
      <h3>Componente: Mi Primer Estado</h3>
      <strong>
        {nombre}
      </strong>
      <button
        onClick={()=> setNombre('Otro nombre')}
      >
        Cambiar texto
      </button>

      <input
        type="text"
        placeholder="Cambia el nombre"
        onChange={cambiarNombre}
      />
    </div>
  )
}

export default MiPrimerEstado