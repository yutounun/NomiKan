import React from 'react'
import logo from './logo.svg'
import './App.css'
import MyButton from './components/Commons/Atoms/MyButton'
import Button from '@mui/material/Button'
import { useStore } from './stores/storeSample.ts'

function App() {
  const [bear, removeAllBears, increasePopulation] = useStore((state) => [
    state.bears,
    state.removeAllBears,
    state.increasePopulation,
  ])
  const showConsole = () => {
    console.log('example')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <MyButton
          onClick={showConsole}
          variant='contained'
          color='secondary'
          size='small'
          value='John'
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.{bear} test
          <Button variant='contained'>button</Button>
        </p>
        <Button onClick={increasePopulation}>Increase</Button>
        <Button onClick={removeAllBears}>Clear</Button>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React{process.env.REACT_APP_ENV}
        </a>
      </header>
    </div>
  )
}

export default App
