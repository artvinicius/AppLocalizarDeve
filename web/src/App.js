import React, {useState } from 'react';

// Componente > Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propiedade > Informações que um componente PAI passa para o componente FILHO
//Estado > Informações mantidas pelo componente(lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

function incrementaCounter(){
 setCounter(counter + 1);
}
  return (
    <>
 <h1> Contador: {counter}</h1>
 <button onClick={incrementaCounter}>Incrementar</button>
 </>
  );
}

export default App;
