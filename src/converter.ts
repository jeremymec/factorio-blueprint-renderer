export interface Entity {
    type: string,
    position: [number, number]
    direction?: number,
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
            position: [entity.position.x - xOffset, entity.position.y - yOffset],
            direction: entity.direction
        }
    }))
    
    let width = Math.max(...entities.map(e => {return e.position[0]})) + 1
    let height = Math.max(...entities.map(e => {return e.position[1]})) + 1

    console.log(`Grid width is ${width} and height is ${height}`)

    return {
        width: width,
        height: height,
        entities: entities
    }
}