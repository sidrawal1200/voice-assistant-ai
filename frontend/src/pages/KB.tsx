import React from 'react'

export default function KB() {
  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Knowledge Base</h1>
      <div className="p-6 bg-black rounded">
        <p className="text-muted">Upload documents or point to an S3 prefix for ingestion.</p>
        <div className="mt-4">
          <label className="block mb-2">Upload document</label>
          <input type="file" className="text-sm text-black" />
          <div className="mt-4">
            <button className="px-4 py-2 border rounded">Upload & Ingest (demo)</button>
          </div>
        </div>
      </div>
    </div>
  )
}
