import React from 'react';

interface RenderedSquareProps {
  name: string;
}
 
function RenderedSquare(props: RenderedSquareProps){
    const urlString = './assets/' + props.name + '.png'
    return <img src={urlString}></img>

}

export { RenderedSquareProps, RenderedSquare };