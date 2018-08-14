import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js';
import Rank from './components/rank/Rank.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesConf}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
          {/* 
         
         <FaceRecognition />*/}
      </div>
    );
  }
}

const particlesConf = {
  particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              
}

export default App;
