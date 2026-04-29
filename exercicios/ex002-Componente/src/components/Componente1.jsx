//exemplo de componente basico, sem props, sem estado, sem nada. Só um componente mesmo.
const Component1 = () => {
    return(
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: 'blueviolet' }}>
            <h1>Componente com função</h1>
            <p>Este é o componente 1, nele usei uma função para definir um componente.</p>
        </div>
    )
}

export default Component1;