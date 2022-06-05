import React from 'react'

export default function Sos() {
    return (
        <div className="grid place-items-center">
            <p className="text-xl py-4 font-semibold">Harshal's last location</p>
            <iframe src="sos.html" height="500px" width="1000px" className="py-4" title="sos" />
        </div>
    )
}
