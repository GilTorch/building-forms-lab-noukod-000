// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

  state={
    name:""
  }

  handleChange=(event)=>{
    this.setState({
      name:event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.handleSubmit(this.state)
    this.setState({
      name:""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}



export default BandInput;
