import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PlayNormal from '../images/play normal.svg'
import AppNormal from '../images/app normal.svg'
import PlayDisabled from '../images/play disabled.svg'
import AppDisabled from '../images/app disabled.svg'

const Button = ({ handleClick, type, disabled }) => {
  const source = (type => {
    if (type === 'play') {
      if (disabled) return PlayDisabled
      else return PlayNormal
    }
    if (type === 'app') {
      if (disabled) return AppDisabled
      else return AppNormal
    }
  })(type)

  return (
    <BTN onClick={handleClick}>
      <img src={source} alt={type === "app" ? "App Store" : "Play Store"} />
    </BTN>
  )
}

const BTN = styled.figure`
  width: 184px;
	height: 56px;
  display: block;
`;

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button;