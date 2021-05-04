import React from 'react';
import { RenderedSquare } from './renderedSquare'

interface MyComponentProps {
  text: string;
}
 
function MyComponent(props: MyComponentProps){
    return <RenderedSquare name="transport-belt-up"></RenderedSquare>
}

export { MyComponentProps, MyComponent };