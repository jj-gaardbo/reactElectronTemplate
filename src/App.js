import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import SCSS from './assets/scss/app.scss';
import WelcomeMessage from './components/WelcomeMessage.jsx';

const appData = {
    title: 'React Demo App'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <WelcomeMessage data={appData}/>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Electron = <span role="img" aria-label="love">😍</span></h2>
        </div>
        <p className="App-intro">
         Version: 0.1.9
        </p>
      </div>
    );
  }
}

export default App;
