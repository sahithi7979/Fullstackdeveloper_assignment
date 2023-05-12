import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='col-3' style={{textAlign:'center'}}>
      <img src={props.src} style={{height:"250px",width:"250px",margin:"30px"}} alt=""/>
      <h1>{props.name}</h1>
      <h2>{props.Price}</h2>
      <h3>{props.Discount}</h3>

    </div>
  )
}

export default Card