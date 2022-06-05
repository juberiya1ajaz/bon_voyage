import React from 'react'

export default function Map() {
    return (
        <div className="grid place-items-center">
            <p className="text-xl py-4 font-semibold">Pin the locations you visited</p>
            <iframe src="map.html" height="500px" width="1000px" className="py-4" title="map" />
        </div>
    )
}
