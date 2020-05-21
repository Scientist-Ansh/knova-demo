import React,{useState} from 'react';
import {Text} from 'react-konva';

const CustomText=(props)=>{
    const [drag, setDrag] = useState(false);
    const [position,setPosition] = useState({x:150,y:150})


    return(
        <Text
            text={props.text}
            x={position.x}
            y={position.y}
            fontSize={30}
            draggable
            fill={props.textColor?props.textColor:"black"}
            onDragStart={() => {
              setDrag(true);
            }}
            onDragEnd={e => {
              setDrag(false);
              setPosition({x:e.target.x(),y:e.target.y()});

            }}
          />

    )
}

export default CustomText;