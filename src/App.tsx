import React from 'react';
import Header from './components/header';
import About from './components/about';
import styled from "styled-components";
import Skills from './components/skills';
import Particles from "react-tsparticles";

// function App() {
//   return (
//   );
// }

const AppContainer = styled.body`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
`;

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main: any) {
    console.log(main);
  }

  particlesLoaded(container: any) {
    console.log(container);
  }
  
  public render() {
    return(
      <div id="root">
        <div><Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "rgb(18, 18, 18)",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /></div>
      <AppContainer>
        <Header/>
        <About/>
        <Skills/>
      </AppContainer>
      </div>
    )
  }
}

export default App;