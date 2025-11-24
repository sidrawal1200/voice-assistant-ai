import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-black rounded">Active clients<br />0</div>
        <div className="p-6 bg-black rounded">Recent calls<br />0</div>
        <div className="p-6 bg-black rounded">KB size<br />0</div>
      </div>
      <section className="mt-8 p-6 bg-black rounded">
        <h2 className="font-semibold">Quick actions</h2>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 border rounded">Upload KB</button>
          <button className="px-4 py-2 border rounded">Select Voice</button>
        </div>
      </section>
    </div>
  )
}
