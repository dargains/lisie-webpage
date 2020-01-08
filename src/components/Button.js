import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ButtonText } from './Fonts'

const Button = ({ handleClick, type, disabled }) => {
  const copy = (type => {
    if (type === 'play') {
      return <p>
        <ButtonText>Google Play </ButtonText>
      </p>
    }
    if (type === 'app') {
      return <p>
        <ButtonText>App Store </ButtonText>
      </p>
    }
  })(type)

  return (
    <BTN onClick={handleClick} disabled={disabled}>
      {copy}
    </BTN>
  )
}

const BTN = styled.figure`
  width: 184px;
	height: 56px;
  border-radius: 28px;
  display: block;
  cursor: pointer;
  opacity: 1;
  border: 2px solid var(--neu-01);
  background-color: ${props => props.disabled ? 'transparent' : 'var(--neu-01'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? .25 : 1};
  transition: opacity .2s ease-in-out;
  &:hover {
    opacity: .5;
  }
`;

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button;