import questionMark from './assets/question-mark.png'
import transportBeltDown from './assets/transport-belt-down.png'
import transportBeltLeft from './assets/transport-belt-left.png'
import transportBeltRight from './assets/transport-belt-right.png'
import transportBeltUp from './assets/transport-belt-up.png'
import splitterUp from './assets/splitter-up.png'
import splitterDown from './assets/splitter-down.png'
import splitterLeft from './assets/splitter-left.png'
import splitterRight from './assets/splitter-right.png'
import ironChest from './assets/iron-chest.png'
import woodenChest from './assets/wooden-chest.png'

export function getImageFromSquareInformation(type: string, direction?: number): string {
    switch (type) {
        case "transport-belt": {
            switch (direction) {
                case 6: {
                    return transportBeltLeft
                }
                case 4: {
                    return transportBeltDown
                }
                case 2: {
                    return transportBeltRight
                }
                default:
                    return transportBeltUp
            }
        }
        case "splitter": {
            switch (direction) {
                case 2: {
                    return splitterRight
                }
                case 6: {
                    return splitterLeft
                }
                case 4: {
                    return splitterDown
                }
                default:
                    return splitterUp
            }
        }
        case "iron-chest": {
            return ironChest
        }
        case "wooden-chest": {
            return woodenChest
        }
    }

    return questionMark
}