
import './App.css'
import { Navbar } from './componets/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar />
    
      <h1>Menú principal</h1>
      <p>Contenido de mi aplicación</p>
      <p>Footer de mi aplicación</p>
      

      </>
  )
}

export default App
