import React from 'react'
import styled from 'styled-components'

import { H1 } from '../components/Fonts'
import Button from '../components/Button'
import Figure from '../components/Figure'
import ButtonContainer from '../components/ButtonContainer'

import logo from '../images/Logo.png'
import Phone from '../images/iPhone 8.png'
import Video from '../images/introvideo.mp4'

const Heading = () => {
  return (
    <Section>
      <div className="wrapper" style={{ paddingBottom: "0" }}>
        <Container>
          <div>
            <Figure src={logo} alt='Lisie App' />
            <H1>
              O elemento que faltava na tua família.
            </H1>
            <ButtonContainer>
              <Button type="play" link="https://play.google.com/apps/testing/com.spiroStockManagement" />
              <Button type="app" disabled />
            </ButtonContainer>
          </div>
          <div>
            <Figure src={Video} alt="Lisie app" style={figureStyle} video />
            <Figure width={530} src={Phone} alt="Lisie app" />
          </div>
        </Container>
      </div>
    </Section>
  )
}

const figureStyle = {
  position: "absolute",
  maxWidth: "59.4%",
  top: "6.2%",
  left: "20.2%"
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
  @media screen and (max-width: 1024px) {
    &:before {
      display: none;
    }
    .wrapper {
      top: -40px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .heading__screen {
    position: absolute;
  }
  div:nth-of-type(1) {
    max-width: 500px;
    div {
      margin-top: 40px;
    }
    figure {
      max-width: 288px;
      left: -64px;
      margin-bottom: -32px;
    }
  }
  @media screen and (max-width: 1024px) {
    div:nth-of-type(1) {
      max-width: none;
      width: 100%;
      div {
        margin-top: 64px;
      }
      figure {
        max-width: 192px;
        left: -42px;
        margin-bottom: -16px;
        margin-top: 64px;
      }
    }
    div:nth-of-type(2) {
      display: none;
    }
  }
`;

export default Heading