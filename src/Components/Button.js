import React from 'react'

export default function Button(props) {
  return (
    <div className='text-center position'>
      <button type="button" class="btn btn-light">{props.name}</button>
    </div>
  )
}
