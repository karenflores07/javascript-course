


/**
 * 
 *  Un componente actualiza si interfaz cuando:
 *  - Cambia su estado: Si el componente interno cambia su estado, se vuelve a renderizar.
 *  - Cambia sus props: Si el componente padre le pasa nuevas props, se vuelve a renderizar.
 * 
 * 
 * 
 */
import { useState } from "react";
export const Counter = () => {

    const [ count, setCount ] = useState(0);
/*
   useState
Renderización  useState()   count    setCount()  
 1                0           0      callback( count + 1 )->1     
 2                -           1      callback( count + 1 )->2    
 3                -           2  
 */
   
  const handleIncrement = () => {
    
    console.log("Valor de counter: ", count);
    setCount(count +1)
  }
  /**
   *  Función para decrementar el valor del contador.
   *  Invocar la función con el botón de Drecrement
   * */
  const  contador = ()=>{
    console.log("valor de Contador ", contador ); 
    setConatdor (contador+1)

  }


   // Funcion para decrementar el valor del contador
    // invocar la funcion con el botón de Decrement
    const handleDecrement = () => {
      console.log("Valor de counter: ", count );
      setCount(count - 1);
  }
  // Funcion para el reset
  const handleReset = () => {
      // console.log("Valor de counter: ", count );
      setCount( 0 );
  }
 
    return (
      <div>
          <h2>Counter</h2>
          <h3>{count}</h3>
          <button onClick={ ()=> handleIncrement("parámetro")   }   >Increment</button>
          <button onClick = { () => {handleDecrement() } }>Decrement</button>
          <button onClick = { () => {handleReset() } }>Reset</button>
      </div>
    )
  }