import React from 'react';
import logo from './images/logo.png';
import { tsParticles } from "tsparticles";
import './App.css';

// function App() {
//   return (
//   );
// }

tsParticles
  .loadJSON("tsparticles", "presets/default.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });

  tsParticles.load("tsparticles", {
    /* options here */
  });


class App extends React.Component {
  
  public render() {
    return(
      <div className="App" id="tsparticles">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-reverse" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        <p>
          Projet en construction 💫💫💫
        </p>
        <a
          className="App-link"
          href="https://github.com/SimonHazard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
    )
  }
}

export default App;
