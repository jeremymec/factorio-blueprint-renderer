import React from 'react';
import GridLayout from 'react-grid-layout';
import { RenderedSquare } from './renderedSquare'
import { Blueprint, convertBlueprintToEntitiesList } from './converter'

interface RenderedBlueprintProps {
  blueprint: Blueprint;
}
 
const RenderedBlueprint = ({ blueprint }: RenderedBlueprintProps) => {
  let entities = convertBlueprintToEntitiesList(blueprint)
  return (
    <GridLayout className="layout" cols={4} rowHeight={64} width={1200}>
      {entities.map((value, index) => {
        return <div key={index} data-grid={{x: value.position[0], y: value.position[1], w: 1, h: 1}}>
          <RenderedSquare type={value.type} direction={value.direction}></RenderedSquare>
        </div>;
      })}
      {/* <div key="a"><RenderedSquare name={"transport-belt-down"}></RenderedSquare></div>
      <div key="b"><RenderedSquare name={"transport-belt-down"}></RenderedSquare></div>
      <div key="c"><RenderedSquare name={"transport-belt-down"}></RenderedSquare></div> */}
    </GridLayout>
  )
  
}

export default RenderedBlueprint;