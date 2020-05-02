import React from 'react';
import CTABlock from '../containers/CTABlock';
import Features from '../containers/Features';
import WOT from '../containers/WOT';
import Heading from '../containers/Heading';
import Footer from '../containers/Footer';
import '../reset.css';
import '../index.css';
import '../animations.css';

export default {
  title: 'Containers',
  parameters: {
    options: {
      showPanel: false,
    }
  }
};

export const Footers = () => <Footer />
// export const Headings = () => <Heading />
export const WOTs = () => <WOT />
export const CTABlocks = () => <CTABlock />
export const Featuress = () => <Features />

CTABlocks.story = {
  name: 'CTA Block'
}
Featuress.story = {
  name: 'Features'
}
WOTs.story = {
  name: 'WOT'
}
Footers.story = {
  name: 'Footer'
}
// Headings.story = {
//   name: 'Heading'
// }