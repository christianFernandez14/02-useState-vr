import EjercicioComponent from "./components/EjercicioComponent"
import MiPrimerEstado from "./components/MiPrimerEstado"

const App = () => {
  let fecha = new Date()
  let fechaActual = fecha.getFullYear()
  // console.log(year.getFullYear())
  return (
    <div>
      <h2>Hook - useState -</h2>
      <hr />
      <EjercicioComponent 
        year={fechaActual}
      />
      <hr />
      <MiPrimerEstado />
    </div>
  )
}

export default App
