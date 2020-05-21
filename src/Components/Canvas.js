import React, { Component } from 'react';
import './Canvas.css';

import { Stage, Layer} from 'react-konva';

import CustomImage from './Image';
import CustomText from './CustomText';
import Rectangle from './Rectangle';
import Controls from './Contorls'
import Circle from './Circle'


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state={
            textBoxes:[
                { text:"Draggable Text", color:"purple"}
            ],
            rectangles:0,
            circles:0

        }
    };

    handleImage=(e)=>{
        console.log("changed")
        console.log(e.target.files[0]);
    }

    addNewText=(newText)=>{
        this.setState(st=>{
            return{
                textBoxes:[...st.textBoxes,newText]
            }
        })
    }

    newRectangle=()=>{
        this.setState(st=>({
            rectangles:st.rectangles+1
        }))
    }

    newCircle=()=>{
        this.setState(st=>({
            circles:st.circles+1
        }))
    }

    render() {
        let rectangles=null;
        if(this.state.rectangles){
            rectangles= Array.from({length:this.state.rectangles}).map((_,i)=><Rectangle key={i}/>)
            
        }
        let circles=null;
        if(this.state.circles){
            circles= Array.from({length:this.state.circles}).map((_,i)=><Circle key={i}/>)
           
        }
        return (
            <div className="canvas">
                <div className="canvas-screen">
                <Stage  width={window.innerWidth*0.80} height={window.innerHeight*0.85}>
                    <Layer>
                        <CustomImage/>
                        {this.state.textBoxes.map( box =><CustomText key={box.text} text={box.text} textColor={box.color} />)}
                        {rectangles}
                        {circles}

                    </Layer>
                </Stage>
                </div>
                
                <div className="canvas-controls">
                    <Controls add={this.addNewText} addRectangle={this.newRectangle} addCircle={this.newCircle}/>
                </div>
         

            </div>
        );
    }
}

export default Canvas;