import React from 'react'

function CheckBox(props:{name:string, value:string}) {
  return (
    <div>
        <div>
              <input
                type="checkbox"
                id={props.value}
                name={props.name}
                value={props.value}
                className="mr-1 cursor-pointer"
              />
              <label className='capitalize' htmlFor={props.value}>{props.value}</label>
            </div>
    </div>
  )
}

export default CheckBox;