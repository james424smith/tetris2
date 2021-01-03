import React from 'react'
import { useSelector } from 'react-redux'
import GridSquare from './GridSquare'
import { shapes } from './../utils/index';

// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {

  const nextShape = useSelector((state) => state.game.nextShape)
  const box = shapes[nextShape][0] // Get the first rotation

  // const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square*nextShape} />
    })
  })

  return (
    <div className="next-block">
      {grid}
    </div>
  )
}