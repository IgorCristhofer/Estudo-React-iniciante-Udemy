import React from 'react'

//Aqui a prop está desestruturada, ou seja, estamos extraindo a prop nome diretamente do objeto de props usando a sintaxe de desestruturação.
//Isso nos permite acessar a prop nome diretamente sem precisar usar a sintaxe de ponto.
//Essa é uma forma mais concisa e legível de acessar as props dentro do componente.
const Props2 = ({nome, tamanho}) => {
  return (
    <div>
        <h2>Passando props com desestruturação.</h2>
        <p>Este componente pode receber props para personalizar seu conteúdo e comportamento como abaixo.</p>

        {/*Aqui estamos acessando a prop nome diretamente, sem usar a sintaxe de ponto, e exibindo seu valor dentro de um parágrafo.*/}
        <p>{nome}, esse nome está sendo passado como prop.</p>

        {/*Aqui estamos acessando a prop tamanho, e passando ela como valor num ao invés de string. */}
        <p>{tamanho} metros.</p>
    </div>
  )
}

export default Props2