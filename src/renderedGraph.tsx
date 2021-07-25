import React from 'react';
import { processGraph } from './graphDisplay'

interface RenderedGraphProps {

  }
   
  const RenderedGraph = ({}: RenderedGraphProps) => {
    const canvas = React.useRef(null)

    React.useEffect(() => {
        const ctx = canvas.current.getContext('2d')
        processGraph(ctx, data)
    }, [])

    return <canvas ref={canvas} width={1000} height={1000} />
  }
    
export default RenderedGraph;

const data = [
    {
        id: 0,
        connection: [2],
        type: 'input',
        connected_to: [2],
        connection_from: [2]
    },
    {
        id: 1,
        connection: [3],
        type: 'input',
        connected_to: [2],
        connection_from: []
    },
    {
        id: 2,
        connection: [5, 4],
        type: 'splitter',
        connected_to: [],
        connection_from: []
    },
    {
        id: 3,
        connection: [5, 4],
        type: 'splitter',
        connected_to: [],
        connection_from: []
    },
    {
        id: 4,
        connection: [6, 3],
        type: 'splitter',
        connected_to: [10],
        connection_from: []
    },
    {
        id: 5,
        connection: [7, 6],
        type: 'splitter',
        connected_to: [],
        connection_from: []
    },
    {
        id: 6,
        connection: [8, 7],
        type: 'splitter',
        connected_to: [],
        connection_from: []
    },
    {
        id: 7,
        connection: [10, 9],
        type: 'splitter',
        connected_to: [],
        connection_from: []
    },
    {
        id: 8,
        connection: [],
        type: 'output',
        connected_to: [],
        connection_from: []
    },
    {
        id: 9,
        connection: [],
        type: 'output',
        connected_to: [],
        connection_from: []
    },
    {
        id: 10,
        connection: [],
        type: 'output',
        connected_to: [],
        connection_from: []
    }
];