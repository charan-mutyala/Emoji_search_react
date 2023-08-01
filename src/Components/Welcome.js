import React, { Component } from 'react'
// import image from './php.jpg';
class Welcome extends Component {
  render() {
    return (
        // <h3>Hello Phani</h3>
    //   <img style={{width: 450, height: 600 }} src={image} alt="ima" height='100px'/>
    <h1> Hello  {this.props.name}</h1>
    )
  }
}

export default Welcome