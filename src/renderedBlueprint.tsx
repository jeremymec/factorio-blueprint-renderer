import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import { RenderedSquare } from './renderedSquare'
import { Blueprint, convertBlueprintToFactorioGrid, FactorioGrid } from './converter'
import grass from './assets/grass.png'

interface RenderedBlueprintProps {
  blueprintData: Blueprint,
  isLoading: boolean
}
 
const RenderedBlueprint = ({ blueprintData, isLoading }: RenderedBlueprintProps) => {

  const [grid, setGrid] = useState<FactorioGrid>()

  useEffect(() => {
    console.log("Effect used")
    if (!isLoading) {
      let factorioGrid = convertBlueprintToFactorioGrid(blueprintData)
      console.log(factorioGrid)
      setGrid(factorioGrid)
    }
  }, [blueprintData, isLoading])

  const gridStyle = {
    backgroundImage: `url('${grass}')`,
    backgroundRepeat: 'repeat'
  }

  return (
    isLoading
    ?
    <div><h1>Loading</h1></div>
    :
    grid == undefined
    ?
    <div><h1>Processing</h1></div>
    :
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