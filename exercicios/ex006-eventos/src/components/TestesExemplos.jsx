import { useState } from 'react'
const TestesExemplos = () => {
  const [count, setCount] = useState(0)

  const [num, setNum] = useState(0)

  {/* O (e) é o objeto do evento que contém informações sobre o evento ocorrido, como o elemento alvo, tipo de evento, etc. */ }
  const handleNum = (e) => {
    {/* O e.preventDefault() impede o comportamento padrão do formulário, que é recarregar a página */ }
    e.preventDefault()

    alert(`O número agora é ${num}`)
  }

  return (
    <div>
      <p>
        Este é um exemplo de componente para demonstrar eventos em React.
      </p>
      {/* Exemplo de evento onClick */}
      <button onClick={() => alert('Clicou')}>Clique em mim</button>

      {/* Exemplo de evento onMouseOver */}
      <div className="counter" onMouseOver={() => setCount(count + 1)}>
          Passe o mouse aqui, {count} vezes!
      </div>

      {/* Exemplo de evento onSubmit */}
      <form onSubmit={handleNum}>{/* O evento onSubmit é acionado quando o formulário é enviado */ }

        {/* O valor do input é controlado pelo estado "value={num}" */ }
        {/* O evento "onChange={(e) => setNum(e.target.value)}" atualiza o estado num conforme o usuário digita */ }
        <input
          type="number"
          value={num} 
          onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit">Enviar</button>{/* O botão de envio aciona o evento onSubmit do formulário */ }
      </form>
    </div>
  )
}

export default TestesExemplos