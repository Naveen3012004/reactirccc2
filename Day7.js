import axios from 'axios'
import React, { Component } from 'react'

export default class Day7 extends Component {
    state = {person:[]}

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {this.setState({person:res.data})})
    }
  render() {
    return (
      <div>
      <h4>Day 7</h4>
        {this.state.person.map((e)=><li key = {e.userId}>{e.title}</li>)}
      </div>
    )
  }
}