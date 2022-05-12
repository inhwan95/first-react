import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1 className='letter'>{props.title}</h1>
      <img className='item-img' src="https://pnshop.co.kr/file/product/thumbnail/1548741810754_PN%20%EC%A3%BC%EB%B0%A9%EA%B0%80%EC%9C%84_005.jpg" />
      <h2 className='letter'>Win</h2>
    </div>
  )
}

export default Box
