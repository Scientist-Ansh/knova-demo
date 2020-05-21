import React, { Component } from 'react';

class Controls extends Component {
    state={
        text:"",
        color:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    add=()=>{
        this.props.add(this.state);
        this.setState({
            text:"",
        color:""
        })
    }
  render() {
    return (
      <div className="Controls">
          <h2>Contorls</h2>
          <p>textbox</p>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} placeholder="value"></input>

          <input type="text" name="color" value={this.state.color} onChange={this.handleChange} placeholder="color"></input>
          <br/>
          <button onClick={this.add}>Add</button>
          <br/>

          <button onClick={this.props.addRectangle}>add rectangle</button>
          <br/>

          <button onClick={this.props.addCircle}>add circle</button>
      </div>
    );
  }
}

export default Controls;