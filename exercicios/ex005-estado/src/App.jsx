import { useState } from 'react'
import './App.css'

function App() {
  //aqui é onde o estado é criado. O useState é um hook de React.
  //[var de consulta, var de atualização] = useState(valor inicial)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Atualização de estado com <strong>useState</strong>.</h1>
      {/* Aqui exibe o valor da variárivel de consulta. */}
      <h2 >Contador: {count}</h2>

      {/* Aqui tem um botão que atualiza o estado. */}
      <button className='cont-btt' type="button" onClick={() => {setCount((prevCount) => prevCount + 1)}}>❤</button>
    </>
  )
}

export default App
