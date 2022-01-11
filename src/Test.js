import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Test extends Component{
    render(){
        return(
                <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.props.name}{this.props.sub}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        )
    }
}

export default Test;