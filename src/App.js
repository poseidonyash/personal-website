import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Yash Prajapati</h1>
        </p>
        <Navbar />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="body">
        <h2>Body</h2>
        {/* Add your body content here */}
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        {/* Add your projects information here */}
      </section>
      <section className="research">
        <h2>Research</h2>
        {/* Add your research information here */}
      </section>
    </div>
  );
}

export default App;