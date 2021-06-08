export function getSizeFromSquareInformation(type: string, direction: number): [number, number] {
    switch (type) {
        case "transport-belt": {
            return [1,1]
        }
        case "splitter": {
            switch (direction) {
                case 2: {
                    return [2,1]
                }
                case 6: {
                    return [2,1]
                }
                case 4: {
                    return [1,2]
                }
                default:
                    return [1,2]
            }
        }
    }

    // Assume any unknown object is just 1x1
    return [1,1]
}