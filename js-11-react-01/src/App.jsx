
import './App.css'
import { Navbar } from './componets/navbar/Navbar';
import { Footer } from './componets/footer/Footer';
import { Main }from './componets/maincpmponents/Main';
function App() {
 /*  const [count, setCount] = useState(0) */

  return (
    <> 
    <Navbar src="/img/dinosaurio.jpn" alt="dino programador " />
    <img/>
      <h1>Menú principal</h1>
      <p>Contenido de mi aplicación</p>
      <p>Footer de mi aplicación</p>
      <Main/>
      <Footer year="2025" cohorte ={50} inLove={false} />
      <Counter/>
      </>
  )
}

export default App
