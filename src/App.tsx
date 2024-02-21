import React from 'react';
import Icon from './assets/check.png';
import './app.css';
import { withPreloader } from '@sc-reactkit/preloader';

export default function App() {
  console.log('Hello World');
  console.log({
    withPreloader
  });

  return (
    <h1>
      Hello World5
      <span>{new Date().toDateString()}</span>
      {/* <Icon /> */}
      <img src={Icon} alt="h" />
    </h1>
  );
}
