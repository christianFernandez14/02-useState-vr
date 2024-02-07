

const MiPrimerEstado = () => {

  let nombre = 'Christian Fernández'

  const cambiarNombre = () => {
    nombre = 'Otro nombre'
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