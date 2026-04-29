
import './App.css'
//importação de componentes, para usar um componente em outro componente, precisamos importá-lo.
//Para isso, usamos a sintaxe de importação do JavaScript. No caso do React, geralmente usamos a sintaxe de importação de módulos ES6.
import Component1 from './components/Componente1'
import Component2 from './components/Componente2'

function App() {
  return (
    <>
    {/*Aqui estamos importando o componente Component1 que usa funções para definir seu comportamento.*/}
    <Component1 />
    {/*Aqui estamos importando o componente Component2 que usa classes para definir seu comportamento.*/}
    <Component2 />
    </>
  )
}

export default App
