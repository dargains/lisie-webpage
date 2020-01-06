import React from 'react'
import styled from 'styled-components'

import { H1 } from '../components/Fonts'
import Button from '../components/Button'
import Figure from '../components/Figure'
import ButtonContainer from '../components/ButtonContainer'

import logo from '../images/Logo.png'
import Phone from '../images/iPhone 8.png'
import Screen from '../images/Screen.png'

const Heading = () => {
  return (
    <Section>
      <div className="wrapper" style={{ paddingBottom: "0" }}>
        <Container>
          <div style={{ maxWidth: "500px" }}>
            <Figure width={288} src={logo} alt='Lisie App' style={logoStyle} />
            <H1>
              O elemento que faltava na tua família.
            </H1>
            <ButtonContainer style={buttonContainerStyle}>
              <Button type="play" />
              <Button type="app" disabled />
              {/* <Button type="play" disabled />
            <Button type="app" disabled /> */}
            </ButtonContainer>
          </div>
          <div>
            <Figure width={315} src={Screen} alt="Lisie app" style={figureStyle} />
            <Figure width={530} src={Phone} alt="Lisie app" />
          </div>
        </Container>
      </div>
    </Section>
  )
}
const logoStyle = {
  left: "-64px",
  marginBottom: "-32px"
}
const buttonContainerStyle = {
  marginTop: "40px"
}
const figureStyle = {
  position: "absolute",
  top: "48px",
  left: "106px"
}

const Section = styled.section`
  background: linear-gradient(46.96deg, #EE5156 0%, #FF7469 41.9%, #F2A378 100%);
  &:before {
    content: "";
    width: 100%;
    height: 170px;
    background-color: var(--neu-01);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .heading__screen {
    position: absolute;
  }
`;

export default Heading