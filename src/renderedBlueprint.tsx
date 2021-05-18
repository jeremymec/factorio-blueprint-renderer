import React from 'react';
import GridLayout from 'react-grid-layout';
import { RenderedSquare } from './renderedSquare'
import { Blueprint, convertBlueprintToFactorioGrid } from './converter'
import grass from './assets/grass.png'

interface RenderedBlueprintProps {
  blueprint: Blueprint;
}
 
const RenderedBlueprint = ({ blueprint }: RenderedBlueprintProps) => {
  let grid = convertBlueprintToFactorioGrid(blueprint)

  const gridStyle = {
    // backgroundColor: 'blue'
    backgroundImage: `url('${grass}')`,
    backgroundRepeat: 'repeat'
  }

  return (
    <GridLayout className="layout" cols={grid.width} rowHeight={64} width={200} style={gridStyle} autoSize={true} margin={[0, 0]} compactType={null}>
      {grid.entities.map((value, index) => {
        return <div key={index} data-grid={{x: value.position[0], y: value.position[1], w: 1, h: 1}}>
          <RenderedSquare type={value.type} direction={value.direction}></RenderedSquare>
        </div>;
      })}
      {/* <div key="1" data-grid={{x: 0, y: 0, w: 1, h: 1}}><RenderedSquare type={"transport-belt"}></RenderedSquare></div>
      <div key="2" data-grid={{x: 1, y: 0, w: 1, h: 1}}><RenderedSquare type={"transport-belt"}></RenderedSquare></div>
      <div key="3" data-grid={{x: 1, y: 1, w: 1, h: 1}}><RenderedSquare type={"transport-belt"}></RenderedSquare></div> */}
    </GridLayout>
  )
  
}

export default RenderedBlueprint;