import './App.css'

//importação de componentes.
import Props1 from './components/Props1'
import Props2 from './components/Props2'

function App() {
  //Aqui estamos declarando a variável nome, que contém a string 'joão'.
  //Essa variável será usada como valor da prop nome ao passar as props para o componente Props1.
  const nome='joão'

  return (
    <>
      <h1>Props</h1>
      <p>Props são propriedades que podem ser passadas para componentes React. Elas permitem que você compartilhe dados entre componentes e personalizar a aparência e o comportamento de um componente.</p>
      <p>As props são passadas para um componente como um objeto, onde cada chave é o nome da prop e o valor é o valor da prop. Você pode acessar as props dentro do componente usando a sintaxe de ponto.</p><br />

      {/*Aqui estamos passando as props nome e idade para o componente Props1. O valor da prop nome é a variável nome, que contém a string 'joão'. Já o valor da prop idade é o número 25 por estar entre chaves {}. */}
      <Props1 nome={nome} idade={25} />

      {/*Aqui a prop de tamanho que tem o valor númerico como float*/}
      <Props2 nome={nome} tamanho={1.87} />
    </>
  )
}

export default App
