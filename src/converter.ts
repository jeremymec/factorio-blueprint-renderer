import {getSizeFromSquareInformation} from './size'

export interface Entity {
    type: string,
    position: [number, number],
    direction?: number,
    size: [number, number]
}


export interface Blueprint {
    blueprint: {
        icons:
        {
            signal: {
                type: string,
                name: string
            },
            index: number
        }[],
        entities:
        {
            entity_number: number,
            name: string,
            position: {
                x: number,
                y: number
            }
            direction?: number
        }[]
        item: string,
        version: number
    }
}


export interface FactorioGrid {
    width: number
    height: number
    entities: Entity[]
}


export function convertBlueprintToFactorioGrid(blueprint: Blueprint): FactorioGrid {

    const xOffset = blueprint.blueprint.entities.reduce((acc, value) => {
        return Math.abs(value.position.x) < acc.position.x ? value : acc
    }).position.x

    const yOffset = blueprint.blueprint.entities.reduce((acc, value) => {
        return Math.abs(value.position.y) < acc.position.y ? value : acc
    }).position.y

    let entities: Entity[] = blueprint.blueprint.entities.map((entity => {
        console.log(`Created entity of type: ${entity.name}\nposition: ${entity.position.x - xOffset} & ${entity.position.y - yOffset}`)
        return {
            type: entity.name,
            position: entity.name !== 'splitter' ? [entity.position.x - xOffset, entity.position.y - yOffset] : [entity.position.x - xOffset*2, entity.position.y - yOffset*2],
            direction: entity.direction,
            size: getSizeFromSquareInformation(entity.name, entity.direction)
        }
    }))

    console.log("ENTITIES#####", entities)
    
    // TODO - The '2' on the end of these statements only works because the largest size possible is a splitter, 2x1 or 1x2.
    // It should be calculated automatically.
    let gridWidth = Math.max(...entities.map(e => {return e.position[0]})) + 2
    let gridHeight = Math.max(...entities.map(e => {return e.position[1]})) + 2

    console.log(`Grid width is ${gridWidth} and height is ${gridHeight}`)

    return {
        width: gridWidth,
        height: gridHeight,
        entities: entities
    }
}