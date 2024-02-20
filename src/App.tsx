import React from 'react';
import Icon from './assets/check.png';
import './app.css';

export default function App() {
  const env = process.env;
  console.log({ env });

  console.log('Hello World');
  return (
    <h1>
      Hello World5
      <span>{new Date().toDateString()}</span>
      {/* <Icon /> */}
      <img src={Icon} alt="h" />
    </h1>
  );
}
