//para usar componentes em React com classes, precisamos importar o React e criar uma classe que estenda a classe Component do React.
//Dentro dessa classe, devemos definir um método render() que retorna o JSX que queremos renderizar na tela.
import React from 'react';

class Component2 extends React.Component {
    //O método render() é obrigatório em componentes de classe. Ele é responsável por retornar o JSX que será renderizado na tela.
    render() {
        //o método return() é usado para retornar o JSX que queremos renderizar na tela.
        return (
            <div style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: 'red' }}>
                <h1>Componente com classe</h1>
                <p>Este é o componente 2, nele usei classes para definir seu comportamento. Ele é uma alternativa ao uso de funções para criar componentes em React.</p>
            </div>
        )
    }
}

export default Component2;