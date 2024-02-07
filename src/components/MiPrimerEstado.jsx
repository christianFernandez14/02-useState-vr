import { useState } from "react"

const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState('Christian Fernández')


  const cambiarNombre = () => {
    setNombre('Otro Nombre')
  }

  return (
    <div>
      <h3>Componente: Mi Primer Estado</h3>
      <strong>
        {nombre}
      </strong>
      <button
        onClick={cambiarNombre}
      >
        Cambiar texto
      </button>
    </div>
  )
}

export default MiPrimerEstado