import React from 'react'

const sampleCalls = [
  { id: 'c1', caller: 'John Doe', date: '2025-11-22', duration: '2:34', summary: 'Demo call summary' },
]

export default function Calls() {
  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Call Recordings</h1>
      <div className="space-y-3">
        {sampleCalls.map((c) => (
          <div key={c.id} className="p-4 bg-black rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{c.caller}</div>
              <div className="text-sm text-muted">{c.date} • {c.duration}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 border rounded">Play</button>
              <button className="px-3 py-2 border rounded">Summary</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
