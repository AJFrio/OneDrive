import React from 'react'
import Map from './Map'
function Input() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <input type="text" placeholder="Where to?" className="text-2xl font-bold p-4 rounded-lg shadow-lg" />
      <Map />
    </div>
  )
}

export default Input