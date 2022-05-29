import React from 'react'


function Details(props) {
  if(!props.data){return}
       
  return (<>
    <img src={props.data.avatar} alt={props.data.name} />
    <h3>{props.data.name}</h3>
    <div>City: {props.data.details.city}</div>
    <div>Company: {props.data.details.company}</div>
    <div>Position: {props.data.details.position}</div>
  </>  
  )
}

export default Details
  

