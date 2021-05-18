import questionMark from './assets/question-mark.png'
import transportBeltDown from './assets/transport-belt-down.png'
import transportBeltLeft from './assets/transport-belt-left.png'
import transportBeltRight from './assets/transport-belt-right.png'
import transportBeltUp from './assets/transport-belt-up.png'

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
            }
            return transportBeltUp
        }

    }

    return questionMark
}