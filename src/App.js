import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js';
import Rank from './components/rank/Rank.js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/face/FaceRecognition.js';


class App extends Component {

constructor() {
  super();
  this.state = {
    input: '',
    imageUrl: ''
  }
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models.predict(Clarifai.FACE_DETECT_MODEL, 
  this.state.input)
  .then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
}

  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesConf}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
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



const app = new Clarifai.App({
 apiKey: '6451c32d54b448fea42e7bd334e27a19'
});

export default App;
