import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ButtonText } from './Fonts'

import AppleC from '../images/appleC.png'
import AppleW from '../images/appleW.svg'
import PlayC from '../images/playC.svg'
import PlayW from '../images/playW.svg'

const Button = ({ handleClick, type, link, disabled }) => {
  const copy = (type => {
    if (type === 'play') {
      if (disabled) return <p>
        <ButtonText>Google Play</ButtonText>
        <img src={PlayW} alt="Google Play" />
      </p>
      else return <p>
        <ButtonText>Google Play</ButtonText>
        <img src={PlayC} alt="Google Play" />
      </p>
    }
    if (type === 'app') {
      if (disabled) return <p>
        <ButtonText>App Store</ButtonText>
        <img src={AppleW} alt="App Store" />
      </p>
      else return <p>
        <ButtonText>App Store</ButtonText>
        <img src={AppleC} alt="App Store" />
      </p>
    }
  })(type)

  return (
    <BTN onClick={handleClick} disabled={disabled} href={link}>
      {copy}
    </BTN>
  )
}

const BTN = styled.a`
  width: 184px;
  padding: 12px 0;
  border-radius: 28px;
  display: block;
  cursor: pointer;
  opacity: 1;
  border: 2px solid var(--neu-01);
  color: ${props => props.disabled ? 'var(--neu-01)' : 'var(--m-01)'};
  background-color: ${props => props.disabled ? 'transparent' : 'var(--neu-01)'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? '.25 ' : '1'};
  transition: opacity .2s ease-in-out;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 24px;
    margin-left: 8px;
  }
  &:hover {
    opacity: .5;
  }
`;

Button.propTypes = {
  handleClick: PropTypes.func,
  link: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button;