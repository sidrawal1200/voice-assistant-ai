import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getToken, clearToken } from '../lib/auth'

export default function Header() {
  const token = getToken()
  const navigate = useNavigate()

  function handleLogout() {
    clearToken()
    navigate('/login')
  }

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-serif">VoicePortal</div>
        <div className="text-sm text-muted">Manage your AI assistant</div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/" className="px-3 py-2 border border-gray-700 rounded">Demo</Link>
        {token ? (
          <button onClick={handleLogout} className="px-3 py-2 border border-gray-700 rounded">Logout</button>
        ) : (
          <Link to="/login" className="px-3 py-2 border border-gray-700 rounded">Sign in</Link>
        )}
        <div className="w-10 h-10 bg-gray-700 rounded-full" />
      </div>
    </header>
  )
}
