import React, {Component} from 'react';
import './App.css';
import projects from './projects.json';
import Navbars from './components/navbars';
import Wrapper from "./components/Wrapper";
import Title from './components/Title';
import ProjectCard from './components/ProjectCard'


class App extends Component {
  state= {
    projects
  };


render() {
  return (
    <Wrapper>
      <Navbars />
      <Title />
        <ProjectCard />
    </Wrapper>
  );
}
}

export default App;