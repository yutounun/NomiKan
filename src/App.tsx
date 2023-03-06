import "./App.css";
import React from "react";
import MyButton from "components/Commons/Atoms/MyButton";
import MyHeader from "components/Commons/Organisms/MyHeader";
import Button from "@mui/material/Button";
import logo from "logo.svg";
import useStore from "stores/storeSample";
import BaseLayout from "components/Commons/Layout/BaseLayout";

function App() {
  const [bears, removeAllBears, increasePopulation] = useStore((state) => [
    state.bears,
    state.removeAllBears,
    state.increasePopulation,
  ]);

  return (
    <div className="App">
      <BaseLayout>
        <MyHeader value="top" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit</p>
          {bears}
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
      </BaseLayout>
    </div>
  );
}

export default App;
