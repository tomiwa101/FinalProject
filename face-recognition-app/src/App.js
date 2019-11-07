import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apiKey: '5c9644278bbd45198b45b8841dc0de30'
});

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
      console.log(event.target.value);
  }

  onButtonClick = () => {
    console.log('click');
    app.models
    .predict("c386b7a870114f4a87477c0824499348", "https://samples.clarifai.com/wedding.jpg")
    .then(response => {
      console.log(response);
    },
    err => {
      console.log(err);
    }
    
    );
  }

  render(){
  return (
    <div className="">
      <Particles className='particles' 
        params= { particleOptions }
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
       onInputChange = { this.onInputChange }
       onButtonClick = { this.onButtonClick }
      />
      <FaceRecognition /> 
    </div>
  );
  }
}

export default App;
