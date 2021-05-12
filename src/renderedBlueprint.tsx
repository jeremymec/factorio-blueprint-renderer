import React from 'react';
import { RenderedSquare } from './renderedSquare'

interface MyComponentProps {
  text: string;
}
 
const MyComponent = ({ text }: MyComponentProps) => <RenderedSquare name={"transport-belt-down"}></RenderedSquare>;

export default MyComponent;