import React from 'react'
import PropTypes from 'prop-types'

const Figure = ({ style, width, src, alt, video }) => {
  return (
    <>
      {
        video
          ? <video src={src} style={{ maxWidth: width + 'px', ...style }} loop muted autoPlay />
          : <figure style={{ maxWidth: width + 'px', ...style }}>
            <img src={src} alt={alt} />
          </figure>
      }
    </>

  )
}

Figure.propTypes = {
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object,
  video: PropTypes.bool
}

export default Figure
