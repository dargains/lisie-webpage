import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonContainer = ({ children, center, style }) => {
  return (
    <Container center={center} style={style}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  > * {
    margin-right: 24px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
      > * {
        margin-right: 0;
        margin-bottom: 16px;
      }
  }
`;

ButtonContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  center: PropTypes.bool,
  style: PropTypes.object
}

export default ButtonContainer