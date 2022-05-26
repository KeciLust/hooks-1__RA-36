import React from 'react'

import {nanoid} from 'nanoid'

function List(props) {
  return (
    <li className='liList' key={nanoid()} onClick={props.fn} id={props.id}>{props.name}</li>
  )
}


export default List
