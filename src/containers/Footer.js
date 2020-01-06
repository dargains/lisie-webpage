import React from 'react'
import styled from 'styled-components'

import { BodySmall } from '../components/Fonts'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="wrapper">
        <BodySmall white>
          Contact us to hello@lisie.app for feedbacks or suggestions
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
