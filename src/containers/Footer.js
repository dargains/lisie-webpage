import React from 'react'
import styled from 'styled-components'

import { BodySmall } from '../components/Fonts'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="wrapper">
        <BodySmall white>
          Fala connosco através de <a href="mailto:hello@lisie.app" style={{ color: 'var(--neu-03)' }}>hello@lisie.app</a> e dá-nos o teu feedback ou sugestões.
        </BodySmall>
        <BodySmall white>
          Lisie © Copyright 2020
        </BodySmall>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: var(--neu-06);
  text-align: center;
`;

export default Footer
