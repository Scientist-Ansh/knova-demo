import React, { Component } from 'react';
import {Rect} from 'react-konva';


class Rectangle extends Component {
  state = {
    isDragging: false,
    x: Math.floor(Math.random()*400),
    y: Math.floor(Math.random()*400)
  };

  render() {
    return (
        <Rect
            x={this.state.x}
            y={this.state.y}
            width={100}
            height={100}
            stroke="black"
            draggable
            onDragStart={() => {
                this.setState({
                  isDragging: true
                });
              }}
              onDragEnd={e => {
                this.setState({
                  isDragging: false,
                  x: e.target.x(),
                  y: e.target.y()
                });
              }}
          />
    );
  }
}

export default Rectangle;