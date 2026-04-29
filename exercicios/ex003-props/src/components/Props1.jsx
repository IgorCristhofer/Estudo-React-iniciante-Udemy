import React from 'react'

// Props são propriedades que podem ser passadas para componentes React.
// Elas permitem que você compartilhe dados entre componentes, assim como personalizar a aparência e o comportamento de um componente.
const Props1 = (props) => {
    //Nesse caso a prop está sendo passado como um objeto, onde cada chave é o nome da prop e o valor é o valor da prop.
    //Você pode acessar as props dentro do componente usando a sintaxe de ponto.
  return (
    <div>
        <h2>Passando props sem desestruturação.</h2>
        <p>Este componente pode receber props para personalizar seu conteúdo e comportamento como abaixo.</p>

        {/*Aqui estamos acessando a prop nome usando a sintaxe de ponto e exibindo seu valor dentro de um parágrafo.*/}
        <p><strong>{props.nome}</strong>, esse nome está sendo passado como prop.</p>

        {/*Aqui estamos acessando a prop idade, e passando ela como valor num ao invés de string. */}
        <p><strong>{props.idade}</strong> anos.</p>
    </div>
  )
}

export default Props1