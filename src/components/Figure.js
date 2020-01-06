import React from 'react'
import PropTypes from 'prop-types'

const Figure = ({ style, width, src, alt }) => {
  return (
    <figure style={{ maxWidth: width + 'px', ...style }}>
      <img src={src} alt={alt} />
    </figure>
  )
}

Figure.propTypes = {
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object
}

export default Figure
