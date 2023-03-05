import './App.css';
import React from 'react';
import MyButton from 'components/Commons/Atoms/MyButton';
import Button from '@mui/material/Button';
import logo from 'logo.svg';
import { useStore } from 'stores/storeSample';

function App() {
  const [bears, removeAllBears, increasePopulation] = useStore((state) => [
    state.bears,
    state.removeAllBears,
    state.increasePopulation,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
          {bears}
        </p>
        <Button onClick={increasePopulation}>Increase</Button>
        <Button onClick={removeAllBears}>Clear</Button>
        <Button>sss</Button>
        <MyButton value="aa" variant="contained" size="medium" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {process.env.REACT_APP_ENV}
        </a>
      </header>
    </div>
  );
}

export default App;
