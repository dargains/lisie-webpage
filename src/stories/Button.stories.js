import React from 'react';
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import Button from '../components/Button';
import '../reset.css';
import '../index.css';
import '../animations.css';

export default {
  title: 'Button',
  decorators: [withKnobs],
  component: Button,
};


export const Buttons = () => {
  const disabled = boolean("Disabled", false);
  const text = select('Type', ['app', 'play'], 'app');
  return <div style={{ backgroundColor: "var(--m-01)", padding: "40px" }}>
    <Button type={text} disabled={disabled} link="https://www.google.com" />
  </div>
}