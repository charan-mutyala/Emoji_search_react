import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(){
        super()
            this.state={
                message:'hello team'
            }
        
    }
    handleClick=()=>{
        this.setState({
            message:'thank you for clicking'
        })
        console.log(this.state.message);

    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click this button</button>
        </div>
    )
  }
}

export default ClassClick