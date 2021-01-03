import React from 'react'

// Represents a grid square with a color

export default function Controls(props) {
  const classes = `grid-square color-${props.color}`
  return(
    <div className="controls">
      <button className="control-button" onClick={(e)=>{}}>Left</button>
      <button className="control-button" onClick={(e)=>{}}>Right</button>
      <button className="control-button" onClick={(e)=>{}}>Rotate</button>
      <button className="control-button" onClick={(e)=>{}}>Down</button>
    </div>
  )
}