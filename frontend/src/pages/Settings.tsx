import React, { useState } from 'react'

export default function Settings() {
  const [prompt, setPrompt] = useState('You are a helpful assistant.')

  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Client Settings</h1>
      <div className="p-6 bg-black rounded">
        <label className="block mb-2">System Prompt</label>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full h-40 text-black" />
        <div className="mt-4">
          <label className="block mb-2">ElevenLabs Voice ID</label>
          <input className="text-black p-2" placeholder="eleven-voice-id" />
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 border rounded">Save</button>
        </div>
      </div>
    </div>
  )
}
