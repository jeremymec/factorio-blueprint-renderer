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


export function convertBlueprintToEntitiesList(blueprint: Blueprint) {

    const xOffset = blueprint.blueprint.entities.reduce((acc, value) => {
        return Math.abs(value.position.x) < acc.position.x ? value : acc
    }).position.x

    const yOffset = blueprint.blueprint.entities.reduce((acc, value) => {
        return Math.abs(value.position.y) < acc.position.y ? value : acc
    }).position.y

    let entities: Entity[] = blueprint.blueprint.entities.map((entity => {
        return {
            type: entity.name,
            position: [entity.position.x - xOffset, entity.position.y - yOffset],
            direction: entity.direction
        }
    }))

    return entities
}