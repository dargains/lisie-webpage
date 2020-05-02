import React from 'react'

import { H2, Body } from '../components/Fonts'

const WOT = props => {
  return (
    <section style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto" }}>
      <div className="wrapper">
        <H2>
          Sobre a Lisie
        </H2>
        <Body>
          Mantém-te a par do que tens em casa, do que consumiste e do que te falta comprar.
        </Body>
        <br />
        <Body>
          A Lisie ajuda-te a economizar tempo e dinheiro, comparando os preços de cada produto nos diferentes supermercados, e adicionando a tua lista de compras diretamente ao teu supermercado online favorito.
        </Body>
        <br />
        <Body>
          Agora a família está completa.
        </Body>
      </div>
    </section>
  )
}

export default WOT
