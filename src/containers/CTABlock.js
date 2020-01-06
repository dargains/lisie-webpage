import React from 'react'
import styled from 'styled-components'

import { H2, Body } from '../components/Fonts'
import ButtonContainer from '../components/ButtonContainer'
import Button from '../components/Button'

const CTABlock = () => {
  return (
    <Section>
      <div className="wrapper">
        <H2 white>Lisie App</H2>
        <Body white>Agora a família está completa</Body>
        <ButtonContainer center style={{ marginTop: "64px" }}>
          <Button type="play" />
          <Button type="app" />
        </ButtonContainer>
      </div>
    </Section >
  )
}


const Section = styled.section`
  background: linear-gradient(46.96deg, #EE5156 0%, #FF7469 41.9%, #F2A378 100%);
  text-align: center;
`;

export default CTABlock
