const JsxExemplos = () => {
    const nome = 'João';

    const userIsloggedIn = false;
    const userRole = 'admin';

    const user = {
    nome: 'Maria',
    idade: 30,
  }

    const elemento = (nome)=>{
    return (
        <div style={{background:"rgb(56, 0, 42)"}}>
            <p>Olá, sou uma função e tenho um parâmetro chamado: <strong>{nome}</strong></p>
        </div>
    )}

    // Array de objetos para o exemplo do map.
    const elemento2 = [
        {nome: 'Humberto', idade: 25},
        {nome: 'Ana', idade: 28},
        {nome: 'Carlos', idade: 32}
    ]

    return (
        <div className="exemplo">
            <h3>Abaixo segue alguns exemplos de uso de JSX:</h3>
            <ol>
                <li>Aqui eu somo dois números usando chaves para tornar o valor em JSX <strong>{1+2}</strong>;</li>

                <li>Aqui eu pego o valor de uma variável: <strong>{nome}</strong></li>

                <li>Aqui eu inicio uma arrow function: {elemento('Humberto')}</li>

                <li>Aqui eu acesso as propriedades de um objeto: <strong>{user.nome}</strong> e <strong>{user.idade}</strong></li>

                <li>Aqui eu faço um map em um array de objetos para renderizar uma lista:
                    <ul  style={{background:"rgb(56, 0, 42)", borderRadius: "10px"}}>
                        {elemento2.map((item, index) => (
                            <li key={index}>{item.nome} tem {item.idade} anos.</li>
                        ))}
                    </ul>
                </li>
                <li>Aqui uso o operador ternário para definir se o usuário está logado: {userIsloggedIn ? (<strong><p>Bem-vindo, {user.nome}!</p></strong>) : (<strong><p>Please log in to continue.</p></strong>)}</li>
                <li>Aqui uso uma comparação para me dar uma resposta. {userRole === "admin" && <strong>Você é um administrador.</strong>}</li>
            </ol>
        </div>
    )
}

export default JsxExemplos