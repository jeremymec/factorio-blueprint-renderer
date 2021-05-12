import React from 'react';
import image from './assets/transport-belt-down.png'

interface RenderedSquareProps {
  name: string;
}
 
function RenderedSquare(props: RenderedSquareProps){
    return <img src={image}/>

}

export { RenderedSquareProps, RenderedSquare };