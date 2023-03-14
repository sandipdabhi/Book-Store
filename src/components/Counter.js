import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Count : 0,
        }
        
    }
    increment() {
        this.setState({
            Count : this.state.Count + 1 ,
        })
    }
  render() {
    return (
      <div>
            <h3>{this.state.Count}</h3>
            <button onClick={this.increment.bind(this)}>Click</button>
      </div>
    )
  }
}
