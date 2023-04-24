import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div style={{textAlign:'center'}}>
      <img src={props.src} style={{height:"250px",width:"250px",margin:"30px"}} alt=""/>
      <p>{props.text}</p>
    </div>
  )
}

export default Card
