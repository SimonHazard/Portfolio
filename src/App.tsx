import React from 'react';
import Header from './components/header';
import About from './components/about';
import styled from "styled-components";
import Skills from './components/skills';
import Project from './components/project';
import Styling from './components/styling';
import Footer from './components/footer';
import Contact from './components/contact';

const AppContainer = styled.div`
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;  
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: auto;
`;

class App extends React.Component {
  
  public render() {
    return(
      <div id="appcontainer">
      <AppContainer>
        <Header/>
        <Styling/>
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
      </AppContainer>
      </div>
    )
  }
}

export default App;
