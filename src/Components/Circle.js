import React,{useState} from 'react';
import {Circle} from 'react-konva';

const Circ=()=>{
    const [position,setPosition] = useState({x:Math.floor(Math.random()*400),y:Math.floor(Math.random()*400)})

    return(
        <Circle x={position.x} y={position.y} radius={30} fill="green" draggable/>
    )
}


export default Circ;