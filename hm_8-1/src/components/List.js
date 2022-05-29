import React from 'react'


function List(props) {
  let className = 'liList'
  if(Number(props.class) === Number(props.id)){
     className = 'liList focus'
  }
 
  return (
    <li className={className} onClick={props.fn} id={props.id}>{props.name}</li>
  )
}


export default List
