import React, { useState, useEffect } from "react"
import { Map, Marker } from "pigeon-maps"

export default function MyMap() {
  const [center, setCenter] = useState([40.014, -105.258])

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2)])
          console.log(center)
        },
        (error) => {
          console.error("Error getting location:", error)
        }
      )
    } else {
      console.log("Geolocation is not available in this browser.")
    }
  }, [])

  return ( 
    <div className="w-3/4 h-3/4 flex justify-center items-center rounded-3xl shadow-7xl border-2 border-gray-300 mt-10 mb-20 overflow-hidden m-10">
      <Map height="100%" center={[center[0], center[1]]} defaultZoom={11}>
        <Marker width={50} anchor={[40.014, -105.258]} />
      </Map>
    </div>
  )
}