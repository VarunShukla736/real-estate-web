import React from 'react'

function TopLocalitiesButton(props: {
  Name:String;
  Id:Number;
}) {
  return (
    <div>
        <button className='border py-1 px-4 text-white hover:bg-white hover:text-blue-600 rounded-3xl border-gray-100' >{props.Name}</button>
    </div>
  )
}

export default TopLocalitiesButton;