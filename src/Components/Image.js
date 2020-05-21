import React from 'react';
import useImage from 'use-image';

import { Image } from 'react-konva';



const CustomImage = (props) =>{
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    return(
    <Image image={image}/>
    );
  };

  export default CustomImage;