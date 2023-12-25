import React from 'react'

function Radio(props:{value:string, name:string}) {
  return (
        <div>
            <input
                type="radio"
                id={props.value}
                name={props.name}
                value={props.value}
                className="mr-1 cursor-pointer"
            />
            <label className='capitalize' htmlFor={props.value}>{props.value}</label>
        </div>       
  )
}

export default Radio;