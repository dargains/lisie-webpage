import React from 'react'

import Heading from '../containers/Heading'
import WOT from '../containers/WOT'
import Features from '../containers/Features'
import Media from '../containers/Media'
import CTABlock from '../containers/CTABlock'

export default function Home() {

  return (
    <>
      <Heading />
      <WOT />
      <Features />
      <Media />
      <CTABlock />
    </>
  )
}