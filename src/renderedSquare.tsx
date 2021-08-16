import React from 'react';
import {getImageFromSquareInformation} from './image'

interface RenderedSquareProps {
  type: string
  direction?: number
}
 
function RenderedSquare(props: RenderedSquareProps){
    return <img src={getImageFromSquareInformation(props.type, props.direction)}/>
}

export { RenderedSquareProps, RenderedSquare };