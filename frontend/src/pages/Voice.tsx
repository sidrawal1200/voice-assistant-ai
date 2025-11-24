import React from 'react'

const voices = [
  { id: 'eleven-1', name: 'Eloquent (Demo)' },
  { id: 'eleven-2', name: 'Neutral (Demo)' },
]

export default function Voice() {
  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Voice Selection</h1>
      <div className="grid grid-cols-2 gap-4">
        {voices.map((v) => (
          <div key={v.id} className="p-4 bg-black rounded flex items-center justify-between">
            <div>
              <div className="font-semibold">{v.name}</div>
              <div className="text-sm text-muted">Voice ID: {v.id}</div>
            </div>
            <button className="px-3 py-2 border rounded">Select</button>
          </div>
        ))}
      </div>
    </div>
  )
}
