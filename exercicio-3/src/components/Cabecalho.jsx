export default function Cabecalho(props) {
  {
    /* Vamos criar um cabecalho com um header, um titulo h1 e 
      uma lista ul com itens com links*/
  }

  return(
    <>
        <header>
    <h1>Vite + React / Matheus, Mirelly, Macirander, Bernardo, Ana, Beatriz </h1>
    <ul>
          {props.children.map((item,indice) => {
              return item
          })
      }
    </ul>
  </header>
    </>
  )
}
