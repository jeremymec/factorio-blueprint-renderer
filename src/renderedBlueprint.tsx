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
    backgroundImage: `url('${grass}')`,
    backgroundRepeat: 'repeat'
  }

  return (
    <GridLayout className="layout" cols={grid.width} rowHeight={64} width={200} style={gridStyle} autoSize={true} margin={[0, 0]} compactType={null}>
      {grid.entities.map((entity, index) => {
        return <div key={index} data-grid={{x: entity.position[0], y: entity.position[1], w: entity.size[0], h: entity.size[1]}}>
          <RenderedSquare type={entity.type} direction={entity.direction}></RenderedSquare>
        </div>;
      })}
    </GridLayout>
  )
  
}

export default RenderedBlueprint;