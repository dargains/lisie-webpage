import React from 'react'
import styled from 'styled-components'

import { H3, Body } from '../components/Fonts'
import Figure from '../components/Figure'

import Feature1 from '../images/feature1.svg'
import Feature2 from '../images/feature2.svg'
import Feature3 from '../images/feature3.svg'

const Features = () => {
  return (
    <section>
      <div className="wrapper" style={sectionStyles}>
        <FeatureItem>
          <Figure width={192} src={Feature1} alt="Lista Compras" style={{ margin: "0 auto 16px" }} />
          <H3>Lista Compras</H3>
          <br />
          <Body>
            Construida automáticamente através da leitura dos códigos de barras de produtos
        </Body>
        </FeatureItem>
        <FeatureItem>
          <Figure width={192} src={Feature2} alt="Comparador de Preços" style={{ margin: "0 auto 16px" }} />
          <H3>Comparador de preços</H3>
          <br />
          <Body>
            Apresenta os preços de cada produto nos diferentes supermercados online
        </Body>
        </FeatureItem>
        <FeatureItem>
          <Figure width={192} src={Feature3} alt="Compra Online" style={{ margin: "0 auto 16px" }} />
          <H3>Compra online</H3>
          <br />
          <Body>
            Transfere a tua lista de compras para o carrinho do teu supermercado online
        </Body>
        </FeatureItem>
      </div>
    </section>
  )
}

const sectionStyles = {
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center"
}

const FeatureItem = styled.article`
  max-width: 380px;
`;

export default Features;