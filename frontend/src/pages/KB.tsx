import React, { useState, useRef } from 'react'

export default function KB() {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files))
      e.dataTransfer.clearData()
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  function handleClick() {
    inputRef.current?.click()
  }

  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Knowledge Base</h1>
      <div className="p-6 bevelled">
        <p className="text-muted">Upload documents or point to an S3 prefix for ingestion.</p>
        <div className="mt-6">
          <label className="block mb-2">Upload document</label>
          <div
            className={`bevelled flex flex-col items-center justify-center py-10 cursor-pointer transition-all ${dragActive ? 'outline outline-2 outline-neon-pink bg-surface' : 'outline outline-1 outline-neon'}`}
            onClick={handleClick}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            style={{ minHeight: 180 }}
          >
            <input
              type="file"
              multiple
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <span className="text-white text-lg mb-2">Drag & drop files here</span>
            <span className="text-muted text-sm">or click to select files</span>
            {files.length > 0 && (
              <ul className="mt-4 text-sm text-neon">
                {files.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-6">
            <button className="btn" disabled={files.length === 0}>Upload & Ingest (demo)</button>
          </div>
        </div>
      </div>
    </div>
  )
}
