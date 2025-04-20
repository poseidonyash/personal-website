import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const optionsPricerUrl = "https://optionspricer-yp.streamlit.app/?embed=true";
  const varDashboardUrl = "https://var-dashboard.streamlit.app/?embed=true";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yash Prajapati</h1>
        <Navbar />
      </header>
      
      <div id="home" className="intro-banner">
        <div className="container">
          <h2>Welcome!</h2>
          <p>Exploring mathematics, data science, and quantitative strategies</p>
        </div>
      </div>
      
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am an Applied Math and Economics student at the University of Kansas. I am very curious individual, I love to learn about new ideas and solve problems through them. Currently, I am learning how to use Fast Fourier Transforms (FFTs) to decompose audio signals into their constituent frequency components
        </p>
        <p>
          My goal is to develop expertise in data modeling and stochastic processes to build quantitative trading strategies. By 2025, I aim to complete at least five projects and secure a job
        </p>
      </section>
      
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="card-container">
          <div className="card options pricer-card">
            <h3>Options Pricing Calculator</h3>
            <div className="streamlit-container">
              {loading1 && <div className="loading-spinner">Loading dashboard...</div>}
              <iframe 
                title="Options Pricing Dashboard" 
                src={optionsPricerUrl}
                width="100%" 
                height="700px" 
                style={{ 
                  border: "none", 
                  borderRadius: "8px",
                  display: loading1 ? "none" : "block" 
                }}
                allow="fullscreen"
                onLoad={() => setLoading1(false)}
              ></iframe>
            </div>
            <div className="card-content">
              <p>Interactive options pricing calculator that uses the Black-Scholes model to value European options. Explore how different parameters affect option prices and visualize the results.</p>
              <a href={optionsPricerUrl} target="_blank" rel="noopener noreferrer" className="btn">View Full Dashboard</a>
            </div>
          </div>
          
          <div className="card options pricer-card">
            <h3>Value at Risk (VaR) Dashboard</h3>
            <div className="streamlit-container">
              {loading2 && <div className="loading-spinner">Loading dashboard...</div>}
              <iframe 
                title="VaR Dashboard" 
                src={varDashboardUrl}
                width="100%" 
                height="700px"
                style={{ 
                  border: "none", 
                  borderRadius: "8px",
                  display: loading2 ? "none" : "block" 
                }}
                allow="fullscreen"
                onLoad={() => setLoading2(false)}
              ></iframe>
            </div>
            <div className="card-content">
              <p>Interactive risk assessment tool for calculating and visualizing Value at Risk metrics for portfolio analysis. Compare historical, parametric and Monte Carlo VaR approaches.</p>
              <a href={varDashboardUrl} target="_blank" rel="noopener noreferrer" className="btn">View Full Dashboard</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Project 2</h3>
              <p>My project and my contributions.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Project 3</h3>
              <p>third project. impact and results of work.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="research" className="research">
        <h2>Research</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Research Area 1</h3>
              <p>Details about my research</p>
              <a href="#" className="btn">Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Research Area 2</h3>
              <p>Details about my research</p>
              <a href="#" className="btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <p>© 2025 Yash Prajapati</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;