import React from 'react'

const Box = (props) => {
  console.log("props", props);
  return (
    <div className='box'>
      <h1 className='letter'>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} />
      <h2 className='letter'>Win</h2>
    </div>
  )
}

export default Box
