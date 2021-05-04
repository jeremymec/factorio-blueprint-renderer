interface Entity {
    type: String
    position: [number, number]
}

interface Blueprint {
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
        }[]
        item: string,
        version: number
    }
}

function render(blueprintJSON: String) {
    // convertBlueprintStringToBlueprint
    // renderBlueprint
    // return blueprint
}

function renderEntitiesOnCanvas(entities: Entity[]): HTMLCanvasElement | null /* TODO: Change This */ {

    let canvas: HTMLCanvasElement
    let context: CanvasRenderingContext2D

    canvas = document.createElement("canvas")
    context = canvas.getContext("2d")!

    return null
}

function convertBlueprintJSONToBlueprint(blueprint: Blueprint) {

    // let blueprint: Blueprint = JSON.parse(blueprintString)
    const xOffset = blueprint.blueprint.entities.reduce((acc, value) => {
        return Math.abs(value.position.x) < acc.position.x ? value : acc
    }).position.x

    const yOffset = blueprint.blueprint.entities.reduce((acc, value) => {
        return Math.abs(value.position.y) < acc.position.y ? value : acc
    }).position.y

    let entities: Entity[] = blueprint.blueprint.entities.map((entity => {
        return {
            type: entity.name,
            position: [entity.position.x - xOffset, entity.position.y - yOffset]
        }
    }))

    return entities
}

let blueprintJSON = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "item",
                    "name": "rail"
                },
                "index": 1
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "straight-rail",
                "position": {
                    "x": 149,
                    "y": 15
                }
            },
            {
                "entity_number": 2,
                "name": "straight-rail",
                "position": {
                    "x": 151,
                    "y": 15
                }
            },
            {
                "entity_number": 3,
                "name": "straight-rail",
                "position": {
                    "x": 153,
                    "y": 15
                }
            },
            {
                "entity_number": 4,
                "name": "straight-rail",
                "position": {
                    "x": 155,
                    "y": 15
                }
            },
            {
                "entity_number": 5,
                "name": "straight-rail",
                "position": {
                    "x": 157,
                    "y": 17
                }
            },
            {
                "entity_number": 6,
                "name": "straight-rail",
                "position": {
                    "x": 159,
                    "y": 17
                }
            },
            {
                "entity_number": 7,
                "name": "straight-rail",
                "position": {
                    "x": 161,
                    "y": 17
                }
            }
        ],
        "item": "blueprint",
        "version": 281479273775104
    }
}

console.log(convertBlueprintJSONToBlueprint(blueprintJSON))