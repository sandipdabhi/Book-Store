import React, { Component } from 'react'
import Title from './components/Title';
// import Home from './Page/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Title name="Title1"/>
        <Title name="Title2"/>
        <Title name="Title3"/>
      </div>
    )
  }
}
